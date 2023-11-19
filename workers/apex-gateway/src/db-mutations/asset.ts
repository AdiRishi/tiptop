import { Env } from '..';
import { getDrizzleClient } from '../db-schema/db-client';
import {
  AssetSelectType,
  AssetVersionSelectType,
  assetTable,
  assetVersionTable,
} from '../db-schema/schema';
import { eq } from 'drizzle-orm';

export async function createRichTextAsset(
  assetData: { folderId: number; editorName: string; contentJson: Record<string, unknown> },
  env: Env
): Promise<{ asset: AssetSelectType; assetVersion: AssetVersionSelectType }> {
  const db = getDrizzleClient(env);

  const asset = await db
    .insert(assetTable)
    .values({
      folderId: assetData.folderId,
      type: 'RICH_TEXT',
      guid: crypto.randomUUID(),
    })
    .returning()
    .get();

  const storageContent = {
    editorName: assetData.editorName,
    editorState: assetData.contentJson,
  };

  const assetVersion = await db
    .insert(assetVersionTable)
    .values({
      assetId: asset.id,
      versionSlug: '1.0.0',
      content: storageContent,
    })
    .returning()
    .get();

  await db
    .update(assetTable)
    .set({ latestVersionId: assetVersion.id })
    .where(eq(assetTable.id, asset.id));
  asset.latestVersionId = assetVersion.id;

  return { asset, assetVersion };
}
