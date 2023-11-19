/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: Date | string; output: Date | string };
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any };
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any };
  /** A string that cannot be passed as an empty value */
  NonEmptyString: { input: string; output: string };
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  UUID: { input: string; output: string };
};

/**
 * An asset is an abstracted object that represents some piece of data in this system.
 * Assets have different types and versions.
 * At any given time an asset can have only one "active" version which is the latest version
 */
export type Asset = {
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** All assets must belong to a folder */
  folder: Folder;
  /** This is a unique identifier that is most useful when sharing asset IDs externally (e.g. in a URL or to another service) */
  guid: Scalars['UUID']['output'];
  id: Scalars['ID']['output'];
  isLatest: Scalars['Boolean']['output'];
  metafields: Array<MetaField>;
  /** Reveals the underlying type of this asset. Use this to determine which asset type to query for further details */
  type: AssetType;
  updatedAt: Scalars['DateTime']['output'];
  versionSlug: Scalars['NonEmptyString']['output'];
};

export type AssetType = 'RICH_TEXT' | 'VIDEO';

export type CfVideoData = {
  __typename?: 'CfVideoData';
  allowedOrigins: Array<Scalars['NonEmptyString']['output']>;
  uid: Scalars['ID']['output'];
};

export type CreateFolderInput = {
  name: Scalars['NonEmptyString']['input'];
  /**
   * The parent folder's path.
   * If you want to create a folder at the root level, use "/".
   */
  parentPath: Scalars['NonEmptyString']['input'];
};

export type CreateRichTextAssetInput = {
  contentJson: Scalars['JSON']['input'];
  editorName: Scalars['NonEmptyString']['input'];
  folderPath: Scalars['NonEmptyString']['input'];
};

/**
 * A folder is the core unit of organization in the asset library.
 * Folders can contain other folders and assets.
 */
export type Folder = {
  __typename?: 'Folder';
  /**
   * Useful for when you want to display a folder's contents in a tree view.
   * NOTE: The asset type is an interface and will not reveal details of the underling asset type
   */
  assets: Array<Asset>;
  /** Direct children of the folder. */
  children: Array<Folder>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** A human readable name for the folder. */
  name: Scalars['NonEmptyString']['output'];
  parent?: Maybe<Folder>;
  /**
   * The path of the folder, relative to the root folder.
   * All paths begin with a slash.
   */
  path: Scalars['NonEmptyString']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

/**
 * A folder is the core unit of organization in the asset library.
 * Folders can contain other folders and assets.
 */
export type FolderAssetsArgs = {
  assetType?: InputMaybe<AssetType>;
};

/**
 * Every asset can have "data" fields stored alongside it.
 * Metafields can have multiple different types, e.g string, json, date, etc.
 * - Each type must be serializable to a string
 * - Metafields are queriable with high performance (indexed)
 */
export type MetaField = {
  __typename?: 'MetaField';
  asset: Asset;
  id: Scalars['ID']['output'];
  key: Scalars['NonEmptyString']['output'];
  value: Scalars['NonEmptyString']['output'];
  valueType: MetaFieldValueType;
};

export type MetaFieldValueType = 'DATE' | 'TEXT';

export type MetafieldInput = {
  __typename?: 'MetafieldInput';
  key: Scalars['NonEmptyString']['output'];
  value: Scalars['NonEmptyString']['output'];
  valueType: MetaFieldValueType;
};

export type Mutation = {
  __typename?: 'Mutation';
  createFolder?: Maybe<Folder>;
  createRichTextAsset: RichTextAsset;
  updateFolderById?: Maybe<Folder>;
  updateFolderByPath?: Maybe<Folder>;
};

export type MutationCreateFolderArgs = {
  input: CreateFolderInput;
};

export type MutationCreateRichTextAssetArgs = {
  input: CreateRichTextAssetInput;
};

export type MutationUpdateFolderByIdArgs = {
  input: UpdateFolderByIdInput;
};

export type MutationUpdateFolderByPathArgs = {
  input: UpdateFolderByPathInput;
};

export type Query = {
  __typename?: 'Query';
  assetByGuid?: Maybe<Asset>;
  assetById?: Maybe<Asset>;
  folderById?: Maybe<Folder>;
  folderByPath?: Maybe<Folder>;
  richTextAssetByGuid?: Maybe<RichTextAsset>;
  richTextAssetById?: Maybe<RichTextAsset>;
};

export type QueryAssetByGuidArgs = {
  guid: Scalars['UUID']['input'];
};

export type QueryAssetByIdArgs = {
  id: Scalars['ID']['input'];
};

export type QueryFolderByIdArgs = {
  id: Scalars['ID']['input'];
};

export type QueryFolderByPathArgs = {
  path: Scalars['NonEmptyString']['input'];
};

export type QueryRichTextAssetByGuidArgs = {
  guid: Scalars['UUID']['input'];
};

export type QueryRichTextAssetByIdArgs = {
  id: Scalars['ID']['input'];
};

export type RichTextAsset = Asset & {
  __typename?: 'RichTextAsset';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The name of the editor used to create this asset
   * Can be used to interpret the format of JSON in contentJson
   */
  editorName: Scalars['NonEmptyString']['output'];
  /**
   * The JSON representation of the editor state
   * Editors serialize their content differently.
   * Refer to editorName to find out what editor was used to create this JSON.
   */
  editorState: Scalars['JSONObject']['output'];
  folder: Folder;
  guid: Scalars['UUID']['output'];
  id: Scalars['ID']['output'];
  isLatest: Scalars['Boolean']['output'];
  metafields: Array<MetaField>;
  type: AssetType;
  updatedAt: Scalars['DateTime']['output'];
  versionSlug: Scalars['NonEmptyString']['output'];
};

export type UpdateFolderByIdInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type UpdateFolderByPathInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  path: Scalars['NonEmptyString']['input'];
};

export type VideoAsset = Asset & {
  __typename?: 'VideoAsset';
  cfData: CfVideoData;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  folder: Folder;
  guid: Scalars['UUID']['output'];
  id: Scalars['ID']['output'];
  isLatest: Scalars['Boolean']['output'];
  metafields: Array<MetaField>;
  type: AssetType;
  updatedAt: Scalars['DateTime']['output'];
  versionSlug: Scalars['NonEmptyString']['output'];
};

export type AssetBrowserQueryQueryVariables = Exact<{
  folderSlug: Scalars['NonEmptyString']['input'];
}>;

export type AssetBrowserQueryQuery = {
  __typename?: 'Query';
  folderByPath?: {
    __typename?: 'Folder';
    id: string;
    path: string;
    name: string;
    children: Array<{ __typename?: 'Folder'; id: string; path: string; name: string }>;
    assets: Array<
      { __typename?: 'RichTextAsset'; id: string } | { __typename?: 'VideoAsset'; id: string }
    >;
  } | null;
};

export const AssetBrowserQueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AssetBrowserQuery' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'folderSlug' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'NonEmptyString' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'folderByPath' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'path' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'folderSlug' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'path' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'children' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'path' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'assets' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'assetType' },
                      value: { kind: 'EnumValue', value: 'RICH_TEXT' },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AssetBrowserQueryQuery, AssetBrowserQueryQueryVariables>;
