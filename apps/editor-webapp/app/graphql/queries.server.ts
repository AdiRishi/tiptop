import { graphql } from './gql-generated';

export const AssetBrowserQuery = graphql(`
  query AssetBrowserQuery($folderSlug: NonEmptyString!) {
    folderByPath(path: $folderSlug) {
      id
      path
      name
      children {
        id
        path
        name
      }
      assets(assetType: RICH_TEXT) {
        id
      }
    }
  }
`);
