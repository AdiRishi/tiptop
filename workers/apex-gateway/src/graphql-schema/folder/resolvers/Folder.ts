import path from 'node:path';
import { getFolderByPath as dbQueryGetFolderByPath } from '~/db-queries/folder';
import type { FolderResolvers } from '../../types.generated';

export const Folder: FolderResolvers = {
  /**
   * Handle parent field resolution for Folder type.
   *
   * We handle this in the type resolver so that we can avoid making a database query if the parent field is not requested.
   */
  parent: async (parent, _args, ctx) => {
    const parentDirectoryPath = path.dirname(parent.path);
    if (parentDirectoryPath !== '/') {
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
    } else {
      return parent.parent;
    }
  },
};
