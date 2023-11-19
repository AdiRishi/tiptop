import type { MutationResolvers } from './../../../types.generated';
import { GraphQLError } from 'graphql';
import { updateFolder as dbMutationUpdateFolder } from '~/db-mutations/folder';
import {
  FolderNotFoundException,
  getFolderById as dbQueryGetFolderById,
} from '~/db-queries/folder';

export const updateFolderById: NonNullable<MutationResolvers['updateFolderById']> = async (
  _parent,
  arg,
  ctx
) => {
  const folderId = parseInt(arg.input.id);

  try {
    await dbMutationUpdateFolder({ id: folderId }, { name: arg.input.name }, ctx);
  } catch (error: unknown) {
    if (error instanceof FolderNotFoundException) {
      throw new GraphQLError(`Folder with id '${folderId}' not found`);
    }
    throw error;
  }

  const folder = await dbQueryGetFolderById(folderId, ctx);

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
