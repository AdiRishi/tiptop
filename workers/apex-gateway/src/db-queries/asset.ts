import { eq } from 'drizzle-orm';
import { Env } from '..';
import { getDrizzleClient } from '~/db-schema/db-client';
import {
  assetTable,
  AssetSelectType,
  AssetVersionSelectType,
  assetVersionTable,
} from '~/db-schema/schema';

export function unwrapRichTextContent(contentJson: Record<string, unknown>): {
  editorName: string;
  editorState: Record<string, unknown>;
} {
  const editorName = contentJson.editorName as string;
  const editorState = contentJson.editorState as Record<string, unknown>;
  return { editorName, editorState };
}

export async function getAssetById(
  id: number,
  versionSlug = 'latest',
  env: Env
): Promise<{ asset: AssetSelectType; assetVersion: AssetVersionSelectType }> {
  const db = getDrizzleClient(env);
  const asset = await db.select().from(assetTable).where(eq(assetTable.id, id)).get();
  if (!asset) {
    throw new AssetNotFoundException(`Asset with id ${id} not found`);
  }
  let assetVersion: AssetVersionSelectType | undefined;
  if (versionSlug === 'latest') {
    assetVersion = await db
      .select()
      .from(assetVersionTable)
      .where(eq(assetVersionTable.id, asset.latestVersionId!))
      .get();
  } else {
    assetVersion = await db
      .select()
      .from(assetVersionTable)
      .where(eq(assetVersionTable.assetId, asset.id))
      .where(eq(assetVersionTable.versionSlug, versionSlug))
      .get();
  }
  if (!assetVersion) {
    throw new AssetVersionNotFoundException(`Asset version with slug ${versionSlug} not found`);
  }

  return { asset, assetVersion };
}

export class AssetNotFoundException extends Error {}
export class AssetVersionNotFoundException extends Error {}
