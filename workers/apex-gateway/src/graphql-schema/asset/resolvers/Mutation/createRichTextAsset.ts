import {
  FolderNotFoundException,
  getFolderByPath as dbQueryGetFolderByPath,
} from '~/db-queries/folder';
import { createRichTextAsset as dbMutationCreateRichTextAsset } from '~/db-mutations/asset';
import type { MutationResolvers } from './../../../types.generated';
import { unwrapRichTextContent } from '~/db-queries/asset';
import { GraphQLError } from 'graphql';

export const createRichTextAsset: NonNullable<MutationResolvers['createRichTextAsset']> = async (
  _parent,
  arg,
  ctx
) => {
  let folder: Awaited<ReturnType<typeof dbQueryGetFolderByPath>>;

  try {
    folder = await dbQueryGetFolderByPath(arg.input.folderPath, ctx);
  } catch (error: unknown) {
    if (error instanceof FolderNotFoundException) {
      throw new GraphQLError(`Folder with path ${arg.input.folderPath} not found`);
    }
    throw error;
  }

  const { asset, assetVersion } = await dbMutationCreateRichTextAsset(
    {
      editorName: arg.input.editorName,
      contentJson: arg.input.contentJson as Record<string, unknown>,
      folderId: folder.id,
    },
    ctx
  );
  const { editorName, editorState } = unwrapRichTextContent(
    assetVersion.content as Record<string, unknown>
  );

  return {
    createdAt: asset.createdAt,
    deletedAt: asset.deletedAt,
    editorState: editorState,
    editorName: editorName,
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
    guid: asset.guid,
    id: asset.id,
    isLatest: true,
    metafields: [],
    type: 'RICH_TEXT',
    updatedAt: assetVersion.updatedAt,
    versionSlug: assetVersion.versionSlug,
  };
};
