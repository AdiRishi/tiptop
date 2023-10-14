import path from 'node:path';
import { Env } from '..';
import { getFolderById } from '../db-queries/folder';
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
