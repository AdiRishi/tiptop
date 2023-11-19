import { Env } from '..';
import { getDrizzleClient } from '../db-schema/db-client';
import { FolderSelectType, folderTable } from '../db-schema/schema';
import { eq } from 'drizzle-orm';

export async function getFolderById(folderId: number, env: Env): Promise<FolderSelectType> {
  const db = getDrizzleClient(env);
  const folder = await db.select().from(folderTable).where(eq(folderTable.id, folderId)).get();
  if (!folder) {
    throw new FolderNotFoundException(`Folder with id ${folderId} not found`);
  }
  return folder;
}

export async function getFolderByPath(folderPath: string, env: Env): Promise<FolderSelectType> {
  const db = getDrizzleClient(env);
  const folder = await db.select().from(folderTable).where(eq(folderTable.path, folderPath)).get();
  if (!folder) {
    throw new FolderNotFoundException(`Folder with path ${folderPath} not found`);
  }
  return folder;
}

export async function getRootFolder(env: Env): Promise<FolderSelectType> {
  return await getFolderByPath('/', env);
}

export async function getSubfoldersById(
  parentFolderId: number,
  env: Env
): Promise<FolderSelectType[]> {
  const db = getDrizzleClient(env);
  const folders = await db
    .select()
    .from(folderTable)
    .where(eq(folderTable.parentId, parentFolderId))
    .all();
  return folders;
}

export async function getFolderWithParent(identifier: { path?: string; id?: number }, env: Env) {
  const db = getDrizzleClient(env);
  let folderWithParent: (FolderSelectType & { parent: FolderSelectType | null }) | undefined;

  if (identifier.id) {
    folderWithParent = await db.query.folderTable.findFirst({
      where: eq(folderTable.id, identifier.id),
      with: {
        parent: true,
      },
    });
  } else if (identifier.path) {
    folderWithParent = await db.query.folderTable.findFirst({
      where: eq(folderTable.path, identifier.path),
      with: {
        parent: true,
      },
    });
  } else {
    throw new Error('Either id or name must be provided');
  }

  if (!folderWithParent) {
    throw new FolderNotFoundException('Folder not found');
  }

  return folderWithParent;
}

export class FolderNotFoundException extends Error {}
