import path from 'node:path';
import { eq } from 'drizzle-orm';
import { Env } from '..';
import { getFolderById, getFolderWithParent } from '../db-queries/folder';
import { getDrizzleClient } from '../db-schema/db-client';
import { FolderSelectType, folderTable } from '../db-schema/schema';

export async function createFolder(
  folderData: { name: string; parentId: number },
  env: Env
): Promise<FolderSelectType> {
  const db = getDrizzleClient(env);

  let folderPath = `/${folderData.name}`;

  if (folderData.parentId) {
    try {
      const parentFolder = await getFolderById(folderData.parentId, env);
      folderPath = path.join(parentFolder.path, folderData.name);
    } catch (error) {
      /* empty */
    }
  }

  return await db
    .insert(folderTable)
    .values({ ...folderData, path: folderPath })
    .returning()
    .get();
}

export async function updateFolder(
  identifier: { path?: string; id?: number },
  updateData: { name?: string | null; parentPath?: string | null; parentId?: number | null },
  env: Env
) {
  const db = getDrizzleClient(env);

  const folderWithParent = await getFolderWithParent(identifier, env);

  let newParentFolder: FolderSelectType | undefined;
  if (updateData.parentId) {
    newParentFolder = await getFolderById(updateData.parentId, env);
  } else if (updateData.parentPath) {
    newParentFolder = await getFolderWithParent({ path: updateData.parentPath }, env);
  }

  let newPath = folderWithParent.path;
  if (updateData.name) {
    newPath = path.join(
      path.dirname(newParentFolder?.path ?? folderWithParent?.parent?.path ?? '/'),
      updateData.name
    );
  }
  let newName = folderWithParent.name;
  if (updateData.name) {
    newName = updateData.name;
  }

  return await db
    .update(folderTable)
    .set({
      path: newPath,
      parentId: newParentFolder?.id ?? folderWithParent.parentId,
      name: newName,
    })
    .where(eq(folderTable.id, folderWithParent.id))
    .returning()
    .get();
}
