import { GraphQLError } from 'graphql';
import { updateFolder as dbMutationUpdateFolder } from '~/db-mutations/folder';
import { FolderNotFoundException } from '~/db-queries/folder';
import type { MutationResolvers } from './../../../types.generated';

export const updateFolderByPath: NonNullable<MutationResolvers['updateFolderByPath']> = async (
  _parent,
  arg,
  ctx
) => {
  const folderPath = arg.input.path;

  try {
    const folder = await dbMutationUpdateFolder(
      { path: folderPath },
      { name: arg.input.name },
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
  } catch (error: unknown) {
    if (error instanceof FolderNotFoundException) {
      throw new GraphQLError(`Folder with path '${folderPath}' not found`);
    }
    throw error;
  }
};
