import type { QueryResolvers } from '../../../types.generated';
import {
  FolderNotFoundException,
  getFolderById as dbQueryGetFolderById,
} from '~/db-queries/folder';

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
      parent: null, // Handle parent field resolution in Folder type resolver
      children: [], // Handle children field resolution in Folder type resolver
      assets: [],
    };
  } catch (error: unknown) {
    if (error instanceof FolderNotFoundException) {
      return null;
    }
    throw error;
  }
};
