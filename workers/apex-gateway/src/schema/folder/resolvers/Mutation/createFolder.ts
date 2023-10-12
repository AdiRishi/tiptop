import type { MutationResolvers } from './../../../types.generated';
export const createFolder: NonNullable<MutationResolvers['createFolder']> = (
  _parent,
  _arg,
  _ctx
) => {
  return {
    id: '1',
    createdAt: new Date(),
    updatedAt: new Date(),
    name: 'Folder 1',
    path: '/folder-1',
    parent: null,
    children: [],
    assets: [],
  };
};
