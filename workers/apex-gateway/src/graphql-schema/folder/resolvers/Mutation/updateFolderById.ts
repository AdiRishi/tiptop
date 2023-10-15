import { updateFolderName as dbMutationUpdateFolderName } from '~/db-mutations/folder';
import type { MutationResolvers } from './../../../types.generated';
import { getFolderById as dbQueryGetFolderById } from '~/db-queries/folder';

export const updateFolderById: NonNullable<MutationResolvers['updateFolderById']> = async (
  _parent,
  arg,
  ctx
) => {
  const folderId = parseInt(arg.input.id);
  const nameUpdate = arg.input.name;

  if (nameUpdate) {
    await dbMutationUpdateFolderName(folderId, nameUpdate, ctx);
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
