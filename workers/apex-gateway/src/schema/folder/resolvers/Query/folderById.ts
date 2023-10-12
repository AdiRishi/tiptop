import type { QueryResolvers } from './../../../types.generated';
export const folderById: NonNullable<QueryResolvers['folderById']> = (_parent, _arg, _ctx) => {
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
