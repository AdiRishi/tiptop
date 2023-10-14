import { GraphQLError } from 'graphql';
import {
  getAssetByGuid as dbQueryGetAssetByGuid,
  AssetNotFoundException,
  AssetVersionNotFoundException,
  unwrapRichTextContent,
} from '~/db-queries/asset';
import {
  FolderNotFoundException,
  getFolderById as dbQueryGetFolderById,
} from '~/db-queries/folder';
import type { QueryResolvers } from './../../../types.generated';

export const richTextAssetByGuid: NonNullable<QueryResolvers['richTextAssetByGuid']> = async (
  _parent,
  arg,
  ctx
) => {
  try {
    const { asset, assetVersion } = await dbQueryGetAssetByGuid(arg.guid, 'latest', ctx);
    const { editorName, editorState } = unwrapRichTextContent(
      assetVersion.content as Record<string, unknown>
    );

    try {
      const folder = await dbQueryGetFolderById(asset.folderId, ctx);
      return {
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
        __typename: 'RichTextAsset',
        editorName: editorName,
        editorState: editorState,
      };
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
