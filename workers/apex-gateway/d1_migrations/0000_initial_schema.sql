CREATE TABLE `asset` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now', 'utc')) NOT NULL,
	`updated_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now', 'utc')) NOT NULL,
	`deleted_at` text,
	`folder_id` integer NOT NULL,
	`guid` text NOT NULL,
	`type` text NOT NULL,
	`latest_version_id` integer,
	FOREIGN KEY (`folder_id`) REFERENCES `folder`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`latest_version_id`) REFERENCES `asset_version`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `asset_version` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now', 'utc')) NOT NULL,
	`updated_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now', 'utc')) NOT NULL,
	`asset_id` integer NOT NULL,
	`version_slug` text NOT NULL,
	`content` text NOT NULL,
	FOREIGN KEY (`asset_id`) REFERENCES `asset`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `folder` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now', 'utc')) NOT NULL,
	`updated_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now', 'utc')) NOT NULL,
	`parent_id` integer,
	`name` text NOT NULL,
	`path` text NOT NULL,
	FOREIGN KEY (`parent_id`) REFERENCES `folder`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `metafield` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now', 'utc')) NOT NULL,
	`updated_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now', 'utc')) NOT NULL,
	`asset_version_id` integer NOT NULL,
	`key` text NOT NULL,
	`value` text NOT NULL,
	`type` text NOT NULL,
	FOREIGN KEY (`asset_version_id`) REFERENCES `asset_version`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE INDEX `idx_asset_guid` ON `asset` (`guid`);--> statement-breakpoint
CREATE INDEX `idx_asset_folder_id_type_deleted_at` ON `asset` (`folder_id`,`type`,`deleted_at`);--> statement-breakpoint
CREATE INDEX `idx_asset_version_asset_id_version_slug` ON `asset_version` (`asset_id`,`version_slug`);--> statement-breakpoint
CREATE INDEX `idx_folder_path` ON `folder` (`path`);--> statement-breakpoint
CREATE INDEX `idx_folder_parent_id` ON `folder` (`parent_id`);--> statement-breakpoint
CREATE INDEX `idx_metafield_asset_version_id_key` ON `metafield` (`asset_version_id`,`key`);--> statement-breakpoint
CREATE INDEX `idx_metafield_key_value` ON `metafield` (`key`,`value`);

-- Create base folder structure
INSERT INTO `folder` (`parent_id`, `name`, `path`) VALUES (null, 'root', '/');
--> statement-breakpoint
