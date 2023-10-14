import { GraphQLError } from 'graphql';
import {
  FolderNotFoundException,
  getFolderByPath as dbQueryGetFolderByPath,
} from '~/db-queries/folder';
import type { QueryResolvers } from './../../../types.generated';

export const folderByPath: NonNullable<QueryResolvers['folderByPath']> = async (
  _parent,
  arg,
  ctx
) => {
  const folderPath = arg.path;
  if (folderPath === '/') {
    throw new GraphQLError(
      "The root folder '/' does not exist. Please query a named folder you created under root"
    );
  }
  let folder: Awaited<ReturnType<typeof dbQueryGetFolderByPath>>;
  try {
    folder = await dbQueryGetFolderByPath(folderPath, ctx);
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
