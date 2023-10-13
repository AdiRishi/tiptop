import { createFolder as dbMutationCreateFolder } from '../../../../db-mutations/folder';
import type { MutationResolvers } from '../../../types.generated';

export const createFolder: NonNullable<MutationResolvers['createFolder']> = async (
  _parent,
  arg,
  ctx
) => {
  const folder = await dbMutationCreateFolder(
    {
      name: arg.input.name,
      parentId: arg.input.parentId ? parseInt(arg.input.parentId) : undefined,
    },
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
