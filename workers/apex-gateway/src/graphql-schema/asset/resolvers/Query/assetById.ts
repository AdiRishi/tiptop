import type { QueryResolvers } from '../../../types.generated';
export const assetById: NonNullable<QueryResolvers['assetById']> = (_parent, _arg, _ctx) => {
  return {
    id: '1',
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    guid: 'random-guid',
    folder: {
      id: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'Folder 1',
      path: '/folder-1',
      parent: null,
      children: [],
      assets: [],
    },
    type: 'RICH_TEXT',
    metafields: [],
    versionSlug: '',
    isLatest: true,

    __typename: 'RichTextAsset',
    editorName: 'TipTop',
    contentJson: '{}',
  };
};
