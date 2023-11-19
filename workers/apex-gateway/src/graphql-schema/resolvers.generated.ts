/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import { CfVideoData } from './asset/resolvers/CfVideoData';
import { MetaField } from './asset/resolvers/MetaField';
import { MetafieldInput } from './asset/resolvers/MetafieldInput';
import { createRichTextAsset as Mutation_createRichTextAsset } from './asset/resolvers/Mutation/createRichTextAsset';
import { assetByGuid as Query_assetByGuid } from './asset/resolvers/Query/assetByGuid';
import { assetById as Query_assetById } from './asset/resolvers/Query/assetById';
import { richTextAssetByGuid as Query_richTextAssetByGuid } from './asset/resolvers/Query/richTextAssetByGuid';
import { richTextAssetById as Query_richTextAssetById } from './asset/resolvers/Query/richTextAssetById';
import { RichTextAsset } from './asset/resolvers/RichTextAsset';
import { VideoAsset } from './asset/resolvers/VideoAsset';
import { Folder } from './folder/resolvers/Folder';
import { createFolder as Mutation_createFolder } from './folder/resolvers/Mutation/createFolder';
import { updateFolderById as Mutation_updateFolderById } from './folder/resolvers/Mutation/updateFolderById';
import { updateFolderByPath as Mutation_updateFolderByPath } from './folder/resolvers/Mutation/updateFolderByPath';
import { folderById as Query_folderById } from './folder/resolvers/Query/folderById';
import { folderByPath as Query_folderByPath } from './folder/resolvers/Query/folderByPath';
import type { Resolvers } from './types.generated';
import {
  DateTimeResolver,
  JSONResolver,
  JSONObjectResolver,
  NonEmptyStringResolver,
  UUIDResolver,
} from 'graphql-scalars';

export const resolvers: Resolvers = {
  Query: {
    assetByGuid: Query_assetByGuid,
    assetById: Query_assetById,
    folderById: Query_folderById,
    folderByPath: Query_folderByPath,
    richTextAssetByGuid: Query_richTextAssetByGuid,
    richTextAssetById: Query_richTextAssetById,
  },
  Mutation: {
    createFolder: Mutation_createFolder,
    createRichTextAsset: Mutation_createRichTextAsset,
    updateFolderById: Mutation_updateFolderById,
    updateFolderByPath: Mutation_updateFolderByPath,
  },

  CfVideoData: CfVideoData,
  Folder: Folder,
  MetaField: MetaField,
  MetafieldInput: MetafieldInput,
  RichTextAsset: RichTextAsset,
  VideoAsset: VideoAsset,
  DateTime: DateTimeResolver,
  JSON: JSONResolver,
  JSONObject: JSONObjectResolver,
  NonEmptyString: NonEmptyStringResolver,
  UUID: UUIDResolver,
};
