import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GraphQLContext } from '../index';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string | number };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: Date | string; output: Date | string };
  JSON: { input: any; output: any };
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
  versionSlug: Scalars['String']['output'];
};

export type AssetType = 'RICH_TEXT' | 'VIDEO';

export type CfVideoData = {
  __typename?: 'CfVideoData';
  allowedOrigins: Array<Scalars['String']['output']>;
  uid: Scalars['ID']['output'];
};

export type CreateFolderInput = {
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['ID']['input']>;
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
  name: Scalars['String']['output'];
  parent?: Maybe<Folder>;
  /**
   * The path of the folder, relative to the root folder.
   * All paths begin with a slash.
   */
  path: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

/**
 * A folder is the core unit of organization in the asset library.
 * Folders can contain other folders and assets.
 */
export type FolderassetsArgs = {
  assetType?: InputMaybe<AssetType>;
};

/**
 * Every asset can have "data" fields stored alongside it.
 * Metafields can have multiple different types, e.g string, json, date, etc.
 * - Each type must be serializable to a string
 * - Metafields are queriable with high perforamnce (indexed)
 */
export type MetaField = {
  __typename?: 'MetaField';
  asset: Asset;
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  value?: Maybe<Scalars['String']['output']>;
  valueType: MetaFieldValueType;
};

export type MetaFieldValueType = 'DATE' | 'TEXT';

export type Mutation = {
  __typename?: 'Mutation';
  createFolder?: Maybe<Folder>;
};

export type MutationcreateFolderArgs = {
  input: CreateFolderInput;
};

export type Query = {
  __typename?: 'Query';
  assetById?: Maybe<Asset>;
  folderById?: Maybe<Folder>;
  folderByPath?: Maybe<Folder>;
};

export type QueryassetByIdArgs = {
  id: Scalars['ID']['input'];
};

export type QueryfolderByIdArgs = {
  id: Scalars['ID']['input'];
};

export type QueryfolderByPathArgs = {
  path: Scalars['String']['input'];
};

export type RichTextAsset = Asset & {
  __typename?: 'RichTextAsset';
  /**
   * The JSON representation of the editor state
   * Editors serialize their content differently.
   * Refer to editorName to find out what editor was used to create this JSON.
   */
  contentJson: Scalars['JSON']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The name of the editor used to create this asset
   * Can be used to interpret the format of JSON in contentJson
   */
  editorName: Scalars['String']['output'];
  folder: Folder;
  guid: Scalars['UUID']['output'];
  id: Scalars['ID']['output'];
  isLatest: Scalars['Boolean']['output'];
  metafields: Array<MetaField>;
  type: AssetType;
  updatedAt: Scalars['DateTime']['output'];
  versionSlug: Scalars['String']['output'];
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
  versionSlug: Scalars['String']['output'];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = {
  Asset:
    | (RichTextAsset & { __typename: 'RichTextAsset' })
    | (VideoAsset & { __typename: 'VideoAsset' });
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Asset: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Asset']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  AssetType: AssetType;
  CfVideoData: ResolverTypeWrapper<CfVideoData>;
  CreateFolderInput: CreateFolderInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Folder: ResolverTypeWrapper<Folder>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  MetaField: ResolverTypeWrapper<MetaField>;
  MetaFieldValueType: MetaFieldValueType;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  RichTextAsset: ResolverTypeWrapper<RichTextAsset>;
  UUID: ResolverTypeWrapper<Scalars['UUID']['output']>;
  VideoAsset: ResolverTypeWrapper<VideoAsset>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Asset: ResolversInterfaceTypes<ResolversParentTypes>['Asset'];
  ID: Scalars['ID']['output'];
  Boolean: Scalars['Boolean']['output'];
  String: Scalars['String']['output'];
  CfVideoData: CfVideoData;
  CreateFolderInput: CreateFolderInput;
  DateTime: Scalars['DateTime']['output'];
  Folder: Folder;
  JSON: Scalars['JSON']['output'];
  MetaField: MetaField;
  Mutation: {};
  Query: {};
  RichTextAsset: RichTextAsset;
  UUID: Scalars['UUID']['output'];
  VideoAsset: VideoAsset;
};

export type AssetResolvers<
  ContextType = GraphQLContext,
  ParentType extends ResolversParentTypes['Asset'] = ResolversParentTypes['Asset'],
> = {
  __resolveType?: TypeResolveFn<'RichTextAsset' | 'VideoAsset', ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  folder?: Resolver<ResolversTypes['Folder'], ParentType, ContextType>;
  guid?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isLatest?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  metafields?: Resolver<Array<ResolversTypes['MetaField']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['AssetType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  versionSlug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type CfVideoDataResolvers<
  ContextType = GraphQLContext,
  ParentType extends ResolversParentTypes['CfVideoData'] = ResolversParentTypes['CfVideoData'],
> = {
  allowedOrigins?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type FolderResolvers<
  ContextType = GraphQLContext,
  ParentType extends ResolversParentTypes['Folder'] = ResolversParentTypes['Folder'],
> = {
  assets?: Resolver<
    Array<ResolversTypes['Asset']>,
    ParentType,
    ContextType,
    Partial<FolderassetsArgs>
  >;
  children?: Resolver<Array<ResolversTypes['Folder']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Folder']>, ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JSONScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type MetaFieldResolvers<
  ContextType = GraphQLContext,
  ParentType extends ResolversParentTypes['MetaField'] = ResolversParentTypes['MetaField'],
> = {
  asset?: Resolver<ResolversTypes['Asset'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  valueType?: Resolver<ResolversTypes['MetaFieldValueType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = GraphQLContext,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
  createFolder?: Resolver<
    Maybe<ResolversTypes['Folder']>,
    ParentType,
    ContextType,
    RequireFields<MutationcreateFolderArgs, 'input'>
  >;
};

export type QueryResolvers<
  ContextType = GraphQLContext,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  assetById?: Resolver<
    Maybe<ResolversTypes['Asset']>,
    ParentType,
    ContextType,
    RequireFields<QueryassetByIdArgs, 'id'>
  >;
  folderById?: Resolver<
    Maybe<ResolversTypes['Folder']>,
    ParentType,
    ContextType,
    RequireFields<QueryfolderByIdArgs, 'id'>
  >;
  folderByPath?: Resolver<
    Maybe<ResolversTypes['Folder']>,
    ParentType,
    ContextType,
    RequireFields<QueryfolderByPathArgs, 'path'>
  >;
};

export type RichTextAssetResolvers<
  ContextType = GraphQLContext,
  ParentType extends ResolversParentTypes['RichTextAsset'] = ResolversParentTypes['RichTextAsset'],
> = {
  contentJson?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  editorName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  folder?: Resolver<ResolversTypes['Folder'], ParentType, ContextType>;
  guid?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isLatest?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  metafields?: Resolver<Array<ResolversTypes['MetaField']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['AssetType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  versionSlug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UUIDScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UUID'], any> {
  name: 'UUID';
}

export type VideoAssetResolvers<
  ContextType = GraphQLContext,
  ParentType extends ResolversParentTypes['VideoAsset'] = ResolversParentTypes['VideoAsset'],
> = {
  cfData?: Resolver<ResolversTypes['CfVideoData'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  folder?: Resolver<ResolversTypes['Folder'], ParentType, ContextType>;
  guid?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isLatest?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  metafields?: Resolver<Array<ResolversTypes['MetaField']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['AssetType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  versionSlug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = GraphQLContext> = {
  Asset?: AssetResolvers<ContextType>;
  CfVideoData?: CfVideoDataResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Folder?: FolderResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  MetaField?: MetaFieldResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RichTextAsset?: RichTextAssetResolvers<ContextType>;
  UUID?: GraphQLScalarType;
  VideoAsset?: VideoAssetResolvers<ContextType>;
};
