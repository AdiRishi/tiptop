import { sqliteTable, integer, text, index, AnySQLiteColumn } from 'drizzle-orm/sqlite-core';
import { InferSelectModel, InferInsertModel } from 'drizzle-orm';
import { dateTime, dateTimeDefaultSQL } from './drizzle-types';

export const folderTable = sqliteTable(
  'folder',
  {
    id: integer('id').notNull().primaryKey({ autoIncrement: true }),
    createdAt: dateTime('created_at').notNull().default(dateTimeDefaultSQL),
    updatedAt: dateTime('updated_at').notNull().default(dateTimeDefaultSQL),
    parentId: integer('parent_id').references((): AnySQLiteColumn => folderTable.id),
    name: text('name').notNull(),
    path: text('path').notNull(),
  },
  (table) => ({
    pathIdx: index('idx_folder_path').on(table.path),
    parentIdIdx: index('idx_folder_parent_id').on(table.parentId),
  })
);
export type FolderInsertType = InferInsertModel<typeof folderTable>;
export type FolderSelectType = InferSelectModel<typeof folderTable>;

export const assetTable = sqliteTable(
  'asset',
  {
    id: integer('id').notNull().primaryKey({ autoIncrement: true }),
    createdAt: dateTime('created_at').notNull().default(dateTimeDefaultSQL),
    updatedAt: dateTime('updated_at').notNull().default(dateTimeDefaultSQL),
    deletedAt: dateTime('deleted_at'),
    folderId: integer('folder_id')
      .notNull()
      .references(() => folderTable.id),
    guid: text('guid').notNull(),
    type: text('type', { enum: ['RICH_TEXT', 'VIDEO'] }).notNull(),
    latestVersionId: integer('latest_version_id').references(
      (): AnySQLiteColumn => assetVersionTable.id
    ),
  },
  (table) => ({
    guidIdx: index('idx_asset_guid').on(table.guid),
    folderIdIdx: index('idx_asset_folder_id_type_deleted_at').on(
      table.folderId,
      table.type,
      table.deletedAt
    ),
  })
);
export type AssetInsertType = InferInsertModel<typeof assetTable>;
export type AssetSelectType = InferSelectModel<typeof assetTable>;

export const assetVersionTable = sqliteTable(
  'asset_version',
  {
    id: integer('id').notNull().primaryKey({ autoIncrement: true }),
    createdAt: dateTime('created_at').notNull().default(dateTimeDefaultSQL),
    updatedAt: dateTime('updated_at').notNull().default(dateTimeDefaultSQL),
    assetId: integer('asset_id')
      .notNull()
      .references(() => assetTable.id),
    versionSlug: text('version_slug').notNull(),
    content: text('content', { mode: 'json' }).notNull(),
  },
  (table) => ({
    assetIdVersionIdx: index('idx_asset_version_asset_id_version_slug').on(
      table.assetId,
      table.versionSlug
    ),
  })
);
export type AssetVersionInsertType = InferInsertModel<typeof assetVersionTable>;
export type AssetVersionSelectType = InferSelectModel<typeof assetVersionTable>;

export const metafieldTable = sqliteTable(
  'metafield',
  {
    id: integer('id').notNull().primaryKey({ autoIncrement: true }),
    createdAt: dateTime('created_at').notNull().default(dateTimeDefaultSQL),
    updatedAt: dateTime('updated_at').notNull().default(dateTimeDefaultSQL),
    assetVersionId: integer('asset_version_id')
      .notNull()
      .references(() => assetVersionTable.id),
    key: text('key').notNull(),
    value: text('value').notNull(),
    type: text('type', { enum: ['TEXT', 'DATE'] }).notNull(),
  },
  (table) => ({
    assetVersionIdKeyIdx: index('idx_metafield_asset_version_id_key').on(
      table.assetVersionId,
      table.key
    ),
    keyValueIdx: index('idx_metafield_key_value').on(table.key, table.value),
  })
);
export type MetafieldInsertType = InferInsertModel<typeof metafieldTable>;
export type MetafieldSelectType = InferSelectModel<typeof metafieldTable>;
