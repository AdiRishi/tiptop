import path from 'node:path';
import {
  getFolderByPath as dbQueryGetFolderByPath,
  getSubfoldersById as dbQueryGetSubfoldersById,
} from '~/db-queries/folder';
import type { FolderResolvers } from '../../types.generated';

export const Folder: FolderResolvers = {
  /**
   * Handle parent field resolution for Folder type.
   *
   * We handle this in the type resolver so that we can avoid making a database query if the parent field is not requested.
   */
  parent: async (parent, _args, ctx) => {
    const currentFolderPath = parent.path;
    const parentDirectoryPath = path.dirname(parent.path);
    if (currentFolderPath !== parentDirectoryPath) {
      const parentFolder = await dbQueryGetFolderByPath(parentDirectoryPath, ctx);
      return {
        id: parentFolder.id,
        createdAt: parentFolder.createdAt,
        updatedAt: parentFolder.updatedAt,
        name: parentFolder.name,
        path: parentFolder.path,
        parent: null,
        children: [],
        assets: [],
      };
    }
  },
  children: async (parent, _args, ctx) => {
    const subfolders = await dbQueryGetSubfoldersById(parseInt(parent.id as string), ctx);
    return subfolders.map((subfolder) => ({
      id: subfolder.id,
      createdAt: subfolder.createdAt,
      updatedAt: subfolder.updatedAt,
      name: subfolder.name,
      path: subfolder.path,
      parent: null,
      children: [],
      assets: [],
    }));
  },
};
