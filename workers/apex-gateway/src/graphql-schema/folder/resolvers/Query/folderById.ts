import {
  FolderNotFoundException,
  getFolderById as dbQueryGetFolderById,
} from '../../../../db-queries/folder';
import type { QueryResolvers } from '../../../types.generated';

export const folderById: NonNullable<QueryResolvers['folderById']> = async (_parent, arg, ctx) => {
  const folderId = parseInt(arg.id);
  let folder: Awaited<ReturnType<typeof dbQueryGetFolderById>>;
  try {
    folder = await dbQueryGetFolderById(folderId, ctx);
    return {
      id: folder.id,
      createdAt: folder.createdAt,
      updatedAt: folder.updatedAt,
      name: folder.name,
      path: folder.path,
      parent: null,
      children: [],
      assets: [],
    };
  } catch (error: unknown) {
    if (error instanceof FolderNotFoundException) {
      return null;
    }
    throw error;
  }
};
