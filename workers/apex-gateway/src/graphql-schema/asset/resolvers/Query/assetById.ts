import { GraphQLError } from 'graphql';
import {
  getAssetById,
  AssetNotFoundException,
  AssetVersionNotFoundException,
} from '~/db-queries/asset';
import type { QueryResolvers } from '../../../types.generated';
import {
  FolderNotFoundException,
  getFolderById as dbQueryGetFolderById,
} from '~/db-queries/folder';

export const assetById: NonNullable<QueryResolvers['assetById']> = async (_parent, arg, ctx) => {
  try {
    const { asset, assetVersion } = await getAssetById(parseInt(arg.id), 'latest', ctx);

    try {
      const folder = await dbQueryGetFolderById(asset.folderId, ctx);
      const baseAsset = {
        id: asset.id,
        createdAt: asset.createdAt,
        updatedAt: assetVersion.updatedAt,
        deletedAt: asset.deletedAt,
        guid: asset.guid,
        folder: {
          id: folder.id,
          createdAt: folder.createdAt,
          updatedAt: folder.updatedAt,
          name: folder.name,
          path: folder.path,
          parent: null, // Handle parent field resolution in Folder type resolver
          children: [], // Handle children field resolution in Folder type resolver
          assets: [],
        },
        type: asset.type,
        metafields: [],
        versionSlug: assetVersion.versionSlug,
        isLatest: true,
      };
      // This query is only used for the Asset type, the type specific fields can never be queried
      if (asset.type === 'RICH_TEXT') {
        return {
          ...baseAsset,
          __typename: 'RichTextAsset',
          contentJson: {},
          editorName: '',
        };
      } else if (asset.type === 'VIDEO') {
        return {
          ...baseAsset,
          __typename: 'VideoAsset',
          cfData: {
            uid: '',
            url: '',
            allowedOrigins: [],
          },
        };
      } else {
        throw new GraphQLError(
          `Unexpected error: Asset type ${asset.type as string} not supported`
        );
      }
    } catch (e: unknown) {
      if (e instanceof FolderNotFoundException) {
        throw new GraphQLError(`Unexpected error: Folder with id ${asset.folderId} not found`);
      }
      throw e;
    }
  } catch (e: unknown) {
    if (e instanceof AssetNotFoundException) {
      return null;
    }
    if (e instanceof AssetVersionNotFoundException) {
      throw new GraphQLError(`Unexpected error: Asset version with slug latest not found`);
    }
    throw e;
  }
};
