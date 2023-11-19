import type { MutationResolvers } from '../../../types.generated';
import { GraphQLError } from 'graphql';
import { createFolder as dbMutationCreateFolder } from '~/db-mutations/folder';
import {
  getRootFolder as dbQueryGetRootFolder,
  getFolderByPath as dbQueryGetFolderByPath,
  FolderNotFoundException,
} from '~/db-queries/folder';

export const createFolder: NonNullable<MutationResolvers['createFolder']> = async (
  _parent,
  arg,
  ctx
) => {
  const parentFolderPath = arg.input.parentPath;
  let parentFolder: Awaited<ReturnType<typeof dbQueryGetFolderByPath>>;

  try {
    if (parentFolderPath === '/') {
      // Use a separate query to get the root folder as this can be cached longer in the KV
      parentFolder = await dbQueryGetRootFolder(ctx);
    } else {
      parentFolder = await dbQueryGetFolderByPath(parentFolderPath, ctx);
    }
  } catch (error: unknown) {
    if (error instanceof FolderNotFoundException) {
      throw new GraphQLError(`Parent folder with path '${parentFolderPath}' not found`);
    }
    throw error;
  }

  const folder = await dbMutationCreateFolder(
    { name: arg.input.name, parentId: parentFolder.id },
    ctx
  );

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
};
