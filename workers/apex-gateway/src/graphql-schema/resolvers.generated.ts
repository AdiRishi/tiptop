/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { CfVideoData } from './asset/resolvers/CfVideoData';
import { Folder } from './folder/resolvers/Folder';
import { MetaField } from './asset/resolvers/MetaField';
import { MetafieldInput } from './asset/resolvers/MetafieldInput';
import { createFolder as Mutation_createFolder } from './folder/resolvers/Mutation/createFolder';
import { createRichTextAsset as Mutation_createRichTextAsset } from './asset/resolvers/Mutation/createRichTextAsset';
import { assetById as Query_assetById } from './asset/resolvers/Query/assetById';
import { folderById as Query_folderById } from './folder/resolvers/Query/folderById';
import { folderByPath as Query_folderByPath } from './folder/resolvers/Query/folderByPath';
import { RichTextAsset } from './asset/resolvers/RichTextAsset';
import { VideoAsset } from './asset/resolvers/VideoAsset';
import {
  DateTimeResolver,
  JSONResolver,
  JSONObjectResolver,
  NonEmptyStringResolver,
  UUIDResolver,
} from 'graphql-scalars';
export const resolvers: Resolvers = {
  Query: {
    assetById: Query_assetById,
    folderById: Query_folderById,
    folderByPath: Query_folderByPath,
  },
  Mutation: {
    createFolder: Mutation_createFolder,
    createRichTextAsset: Mutation_createRichTextAsset,
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
