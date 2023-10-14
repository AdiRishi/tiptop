import type { DocumentNode } from 'graphql';
export const typeDefs = {
  kind: 'Document',
  definitions: [
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 12, end: 17 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'assetById', loc: { start: 22, end: 31 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'id', loc: { start: 32, end: 34 } },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'ID', loc: { start: 36, end: 38 } },
                  loc: { start: 36, end: 38 },
                },
                loc: { start: 36, end: 39 },
              },
              directives: [],
              loc: { start: 32, end: 39 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Asset', loc: { start: 42, end: 47 } },
            loc: { start: 42, end: 47 },
          },
          directives: [],
          loc: { start: 22, end: 47 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'assetByGuid', loc: { start: 50, end: 61 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'guid', loc: { start: 62, end: 66 } },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'UUID', loc: { start: 68, end: 72 } },
                  loc: { start: 68, end: 72 },
                },
                loc: { start: 68, end: 73 },
              },
              directives: [],
              loc: { start: 62, end: 73 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Asset', loc: { start: 76, end: 81 } },
            loc: { start: 76, end: 81 },
          },
          directives: [],
          loc: { start: 50, end: 81 },
        },
      ],
      loc: { start: 0, end: 83 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 97, end: 105 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createRichTextAsset', loc: { start: 110, end: 129 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'input', loc: { start: 130, end: 135 } },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'CreateRichTextAssetInput',
                    loc: { start: 137, end: 161 },
                  },
                  loc: { start: 137, end: 161 },
                },
                loc: { start: 137, end: 162 },
              },
              directives: [],
              loc: { start: 130, end: 162 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'RichTextAsset', loc: { start: 165, end: 178 } },
              loc: { start: 165, end: 178 },
            },
            loc: { start: 165, end: 179 },
          },
          directives: [],
          loc: { start: 110, end: 179 },
        },
      ],
      loc: { start: 85, end: 181 },
    },
    {
      kind: 'InterfaceTypeDefinition',
      description: {
        kind: 'StringValue',
        value:
          'An asset is an abstracted object that represents some piece of data in this system.\nAssets have different types and versions.\nAt any given time an asset can have only one "active" version which is the latest version',
        block: true,
        loc: { start: 183, end: 412 },
      },
      name: { kind: 'Name', value: 'Asset', loc: { start: 423, end: 428 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 433, end: 435 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 437, end: 439 } },
              loc: { start: 437, end: 439 },
            },
            loc: { start: 437, end: 440 },
          },
          directives: [],
          loc: { start: 433, end: 440 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createdAt', loc: { start: 443, end: 452 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 454, end: 462 } },
              loc: { start: 454, end: 462 },
            },
            loc: { start: 454, end: 463 },
          },
          directives: [],
          loc: { start: 443, end: 463 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'updatedAt', loc: { start: 466, end: 475 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 477, end: 485 } },
              loc: { start: 477, end: 485 },
            },
            loc: { start: 477, end: 486 },
          },
          directives: [],
          loc: { start: 466, end: 486 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'deletedAt', loc: { start: 489, end: 498 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'DateTime', loc: { start: 500, end: 508 } },
            loc: { start: 500, end: 508 },
          },
          directives: [],
          loc: { start: 489, end: 508 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value:
              'This is a unique identifier that is most useful when sharing asset IDs externally (e.g. in a URL or to another service)',
            block: true,
            loc: { start: 511, end: 644 },
          },
          name: { kind: 'Name', value: 'guid', loc: { start: 647, end: 651 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UUID', loc: { start: 653, end: 657 } },
              loc: { start: 653, end: 657 },
            },
            loc: { start: 653, end: 658 },
          },
          directives: [],
          loc: { start: 511, end: 658 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value: 'All assets must belong to a folder',
            block: true,
            loc: { start: 661, end: 709 },
          },
          name: { kind: 'Name', value: 'folder', loc: { start: 712, end: 718 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Folder', loc: { start: 720, end: 726 } },
              loc: { start: 720, end: 726 },
            },
            loc: { start: 720, end: 727 },
          },
          directives: [],
          loc: { start: 661, end: 727 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value:
              'Reveals the underlying type of this asset. Use this to determine which asset type to query for further details',
            block: true,
            loc: { start: 730, end: 854 },
          },
          name: { kind: 'Name', value: 'type', loc: { start: 857, end: 861 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AssetType', loc: { start: 863, end: 872 } },
              loc: { start: 863, end: 872 },
            },
            loc: { start: 863, end: 873 },
          },
          directives: [],
          loc: { start: 730, end: 873 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'metafields', loc: { start: 876, end: 886 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'MetaField', loc: { start: 889, end: 898 } },
                  loc: { start: 889, end: 898 },
                },
                loc: { start: 889, end: 899 },
              },
              loc: { start: 888, end: 900 },
            },
            loc: { start: 888, end: 901 },
          },
          directives: [],
          loc: { start: 876, end: 901 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'versionSlug', loc: { start: 904, end: 915 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 917, end: 931 } },
              loc: { start: 917, end: 931 },
            },
            loc: { start: 917, end: 932 },
          },
          directives: [],
          loc: { start: 904, end: 932 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'isLatest', loc: { start: 935, end: 943 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean', loc: { start: 945, end: 952 } },
              loc: { start: 945, end: 952 },
            },
            loc: { start: 945, end: 953 },
          },
          directives: [],
          loc: { start: 935, end: 953 },
        },
      ],
      loc: { start: 183, end: 955 },
    },
    {
      kind: 'EnumTypeDefinition',
      name: { kind: 'Name', value: 'AssetType', loc: { start: 962, end: 971 } },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'RICH_TEXT', loc: { start: 976, end: 985 } },
          directives: [],
          loc: { start: 976, end: 985 },
        },
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'VIDEO', loc: { start: 988, end: 993 } },
          directives: [],
          loc: { start: 988, end: 993 },
        },
      ],
      loc: { start: 957, end: 995 },
    },
    {
      kind: 'ObjectTypeDefinition',
      description: {
        kind: 'StringValue',
        value:
          'Every asset can have "data" fields stored alongside it.\nMetafields can have multiple different types, e.g string, json, date, etc.\n- Each type must be serializable to a string\n- Metafields are queriable with high performance (indexed)',
        block: true,
        loc: { start: 997, end: 1247 },
      },
      name: { kind: 'Name', value: 'MetaField', loc: { start: 1253, end: 1262 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1267, end: 1269 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 1271, end: 1273 } },
              loc: { start: 1271, end: 1273 },
            },
            loc: { start: 1271, end: 1274 },
          },
          directives: [],
          loc: { start: 1267, end: 1274 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'key', loc: { start: 1277, end: 1280 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 1282, end: 1296 } },
              loc: { start: 1282, end: 1296 },
            },
            loc: { start: 1282, end: 1297 },
          },
          directives: [],
          loc: { start: 1277, end: 1297 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'valueType', loc: { start: 1300, end: 1309 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'MetaFieldValueType', loc: { start: 1311, end: 1329 } },
              loc: { start: 1311, end: 1329 },
            },
            loc: { start: 1311, end: 1330 },
          },
          directives: [],
          loc: { start: 1300, end: 1330 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'value', loc: { start: 1333, end: 1338 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 1340, end: 1354 } },
              loc: { start: 1340, end: 1354 },
            },
            loc: { start: 1340, end: 1355 },
          },
          directives: [],
          loc: { start: 1333, end: 1355 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'asset', loc: { start: 1358, end: 1363 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Asset', loc: { start: 1365, end: 1370 } },
              loc: { start: 1365, end: 1370 },
            },
            loc: { start: 1365, end: 1371 },
          },
          directives: [],
          loc: { start: 1358, end: 1371 },
        },
      ],
      loc: { start: 997, end: 1373 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'MetafieldInput', loc: { start: 1380, end: 1394 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'key', loc: { start: 1399, end: 1402 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 1404, end: 1418 } },
              loc: { start: 1404, end: 1418 },
            },
            loc: { start: 1404, end: 1419 },
          },
          directives: [],
          loc: { start: 1399, end: 1419 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'valueType', loc: { start: 1422, end: 1431 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'MetaFieldValueType', loc: { start: 1433, end: 1451 } },
              loc: { start: 1433, end: 1451 },
            },
            loc: { start: 1433, end: 1452 },
          },
          directives: [],
          loc: { start: 1422, end: 1452 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'value', loc: { start: 1455, end: 1460 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 1462, end: 1476 } },
              loc: { start: 1462, end: 1476 },
            },
            loc: { start: 1462, end: 1477 },
          },
          directives: [],
          loc: { start: 1455, end: 1477 },
        },
      ],
      loc: { start: 1375, end: 1479 },
    },
    {
      kind: 'EnumTypeDefinition',
      name: { kind: 'Name', value: 'MetaFieldValueType', loc: { start: 1486, end: 1504 } },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'TEXT', loc: { start: 1509, end: 1513 } },
          directives: [],
          loc: { start: 1509, end: 1513 },
        },
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'DATE', loc: { start: 1516, end: 1520 } },
          directives: [],
          loc: { start: 1516, end: 1520 },
        },
      ],
      loc: { start: 1481, end: 1522 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'VideoAsset', loc: { start: 1529, end: 1539 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Asset', loc: { start: 1551, end: 1556 } },
          loc: { start: 1551, end: 1556 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1561, end: 1563 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 1565, end: 1567 } },
              loc: { start: 1565, end: 1567 },
            },
            loc: { start: 1565, end: 1568 },
          },
          directives: [],
          loc: { start: 1561, end: 1568 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createdAt', loc: { start: 1571, end: 1580 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 1582, end: 1590 } },
              loc: { start: 1582, end: 1590 },
            },
            loc: { start: 1582, end: 1591 },
          },
          directives: [],
          loc: { start: 1571, end: 1591 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'updatedAt', loc: { start: 1594, end: 1603 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 1605, end: 1613 } },
              loc: { start: 1605, end: 1613 },
            },
            loc: { start: 1605, end: 1614 },
          },
          directives: [],
          loc: { start: 1594, end: 1614 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'deletedAt', loc: { start: 1617, end: 1626 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'DateTime', loc: { start: 1628, end: 1636 } },
            loc: { start: 1628, end: 1636 },
          },
          directives: [],
          loc: { start: 1617, end: 1636 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'guid', loc: { start: 1639, end: 1643 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UUID', loc: { start: 1645, end: 1649 } },
              loc: { start: 1645, end: 1649 },
            },
            loc: { start: 1645, end: 1650 },
          },
          directives: [],
          loc: { start: 1639, end: 1650 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'folder', loc: { start: 1653, end: 1659 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Folder', loc: { start: 1661, end: 1667 } },
              loc: { start: 1661, end: 1667 },
            },
            loc: { start: 1661, end: 1668 },
          },
          directives: [],
          loc: { start: 1653, end: 1668 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'type', loc: { start: 1671, end: 1675 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AssetType', loc: { start: 1677, end: 1686 } },
              loc: { start: 1677, end: 1686 },
            },
            loc: { start: 1677, end: 1687 },
          },
          directives: [],
          loc: { start: 1671, end: 1687 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'metafields', loc: { start: 1690, end: 1700 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'MetaField', loc: { start: 1703, end: 1712 } },
                  loc: { start: 1703, end: 1712 },
                },
                loc: { start: 1703, end: 1713 },
              },
              loc: { start: 1702, end: 1714 },
            },
            loc: { start: 1702, end: 1715 },
          },
          directives: [],
          loc: { start: 1690, end: 1715 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'versionSlug', loc: { start: 1718, end: 1729 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 1731, end: 1745 } },
              loc: { start: 1731, end: 1745 },
            },
            loc: { start: 1731, end: 1746 },
          },
          directives: [],
          loc: { start: 1718, end: 1746 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'isLatest', loc: { start: 1749, end: 1757 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean', loc: { start: 1759, end: 1766 } },
              loc: { start: 1759, end: 1766 },
            },
            loc: { start: 1759, end: 1767 },
          },
          directives: [],
          loc: { start: 1749, end: 1767 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'cfData', loc: { start: 1770, end: 1776 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CfVideoData', loc: { start: 1778, end: 1789 } },
              loc: { start: 1778, end: 1789 },
            },
            loc: { start: 1778, end: 1790 },
          },
          directives: [],
          loc: { start: 1770, end: 1790 },
        },
      ],
      loc: { start: 1524, end: 1792 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'CfVideoData', loc: { start: 1799, end: 1810 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'uid', loc: { start: 1815, end: 1818 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 1820, end: 1822 } },
              loc: { start: 1820, end: 1822 },
            },
            loc: { start: 1820, end: 1823 },
          },
          directives: [],
          loc: { start: 1815, end: 1823 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'allowedOrigins', loc: { start: 1826, end: 1840 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 1843, end: 1857 } },
                  loc: { start: 1843, end: 1857 },
                },
                loc: { start: 1843, end: 1858 },
              },
              loc: { start: 1842, end: 1859 },
            },
            loc: { start: 1842, end: 1860 },
          },
          directives: [],
          loc: { start: 1826, end: 1860 },
        },
      ],
      loc: { start: 1794, end: 1862 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'RichTextAsset', loc: { start: 1869, end: 1882 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Asset', loc: { start: 1894, end: 1899 } },
          loc: { start: 1894, end: 1899 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1904, end: 1906 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 1908, end: 1910 } },
              loc: { start: 1908, end: 1910 },
            },
            loc: { start: 1908, end: 1911 },
          },
          directives: [],
          loc: { start: 1904, end: 1911 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createdAt', loc: { start: 1914, end: 1923 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 1925, end: 1933 } },
              loc: { start: 1925, end: 1933 },
            },
            loc: { start: 1925, end: 1934 },
          },
          directives: [],
          loc: { start: 1914, end: 1934 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'updatedAt', loc: { start: 1937, end: 1946 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 1948, end: 1956 } },
              loc: { start: 1948, end: 1956 },
            },
            loc: { start: 1948, end: 1957 },
          },
          directives: [],
          loc: { start: 1937, end: 1957 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'deletedAt', loc: { start: 1960, end: 1969 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'DateTime', loc: { start: 1971, end: 1979 } },
            loc: { start: 1971, end: 1979 },
          },
          directives: [],
          loc: { start: 1960, end: 1979 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'guid', loc: { start: 1982, end: 1986 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UUID', loc: { start: 1988, end: 1992 } },
              loc: { start: 1988, end: 1992 },
            },
            loc: { start: 1988, end: 1993 },
          },
          directives: [],
          loc: { start: 1982, end: 1993 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'folder', loc: { start: 1996, end: 2002 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Folder', loc: { start: 2004, end: 2010 } },
              loc: { start: 2004, end: 2010 },
            },
            loc: { start: 2004, end: 2011 },
          },
          directives: [],
          loc: { start: 1996, end: 2011 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'type', loc: { start: 2014, end: 2018 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AssetType', loc: { start: 2020, end: 2029 } },
              loc: { start: 2020, end: 2029 },
            },
            loc: { start: 2020, end: 2030 },
          },
          directives: [],
          loc: { start: 2014, end: 2030 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'metafields', loc: { start: 2033, end: 2043 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'MetaField', loc: { start: 2046, end: 2055 } },
                  loc: { start: 2046, end: 2055 },
                },
                loc: { start: 2046, end: 2056 },
              },
              loc: { start: 2045, end: 2057 },
            },
            loc: { start: 2045, end: 2058 },
          },
          directives: [],
          loc: { start: 2033, end: 2058 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'versionSlug', loc: { start: 2061, end: 2072 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 2074, end: 2088 } },
              loc: { start: 2074, end: 2088 },
            },
            loc: { start: 2074, end: 2089 },
          },
          directives: [],
          loc: { start: 2061, end: 2089 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'isLatest', loc: { start: 2092, end: 2100 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean', loc: { start: 2102, end: 2109 } },
              loc: { start: 2102, end: 2109 },
            },
            loc: { start: 2102, end: 2110 },
          },
          directives: [],
          loc: { start: 2092, end: 2110 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value:
              'The name of the editor used to create this asset\nCan be used to interpret the format of JSON in contentJson',
            block: true,
            loc: { start: 2113, end: 2238 },
          },
          name: { kind: 'Name', value: 'editorName', loc: { start: 2241, end: 2251 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 2253, end: 2267 } },
              loc: { start: 2253, end: 2267 },
            },
            loc: { start: 2253, end: 2268 },
          },
          directives: [],
          loc: { start: 2113, end: 2268 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value:
              'The JSON representation of the editor state\nEditors serialize their content differently.\nRefer to editorName to find out what editor was used to create this JSON.',
            block: true,
            loc: { start: 2271, end: 2455 },
          },
          name: { kind: 'Name', value: 'contentJson', loc: { start: 2458, end: 2469 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'JSONObject', loc: { start: 2471, end: 2481 } },
              loc: { start: 2471, end: 2481 },
            },
            loc: { start: 2471, end: 2482 },
          },
          directives: [],
          loc: { start: 2271, end: 2482 },
        },
      ],
      loc: { start: 1864, end: 2484 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: { kind: 'Name', value: 'CreateRichTextAssetInput', loc: { start: 2492, end: 2516 } },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'folderPath', loc: { start: 2521, end: 2531 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 2533, end: 2547 } },
              loc: { start: 2533, end: 2547 },
            },
            loc: { start: 2533, end: 2548 },
          },
          directives: [],
          loc: { start: 2521, end: 2548 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'editorName', loc: { start: 2551, end: 2561 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 2563, end: 2577 } },
              loc: { start: 2563, end: 2577 },
            },
            loc: { start: 2563, end: 2578 },
          },
          directives: [],
          loc: { start: 2551, end: 2578 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'contentJson', loc: { start: 2581, end: 2592 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'JSON', loc: { start: 2594, end: 2598 } },
              loc: { start: 2594, end: 2598 },
            },
            loc: { start: 2594, end: 2599 },
          },
          directives: [],
          loc: { start: 2581, end: 2599 },
        },
      ],
      loc: { start: 2486, end: 2601 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Query', loc: { start: 2607, end: 2612 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 2602, end: 2612 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 2619, end: 2627 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 2614, end: 2627 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'DateTime', loc: { start: 2636, end: 2644 } },
      directives: [],
      loc: { start: 2629, end: 2644 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'UUID', loc: { start: 2653, end: 2657 } },
      directives: [],
      loc: { start: 2646, end: 2657 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'JSON', loc: { start: 2666, end: 2670 } },
      directives: [],
      loc: { start: 2659, end: 2670 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'JSONObject', loc: { start: 2679, end: 2689 } },
      directives: [],
      loc: { start: 2672, end: 2689 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 2698, end: 2712 } },
      directives: [],
      loc: { start: 2691, end: 2712 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 2725, end: 2730 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'folderById', loc: { start: 2735, end: 2745 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'id', loc: { start: 2746, end: 2748 } },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'ID', loc: { start: 2750, end: 2752 } },
                  loc: { start: 2750, end: 2752 },
                },
                loc: { start: 2750, end: 2753 },
              },
              directives: [],
              loc: { start: 2746, end: 2753 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Folder', loc: { start: 2756, end: 2762 } },
            loc: { start: 2756, end: 2762 },
          },
          directives: [],
          loc: { start: 2735, end: 2762 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'folderByPath', loc: { start: 2765, end: 2777 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'path', loc: { start: 2778, end: 2782 } },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 2784, end: 2798 } },
                  loc: { start: 2784, end: 2798 },
                },
                loc: { start: 2784, end: 2799 },
              },
              directives: [],
              loc: { start: 2778, end: 2799 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Folder', loc: { start: 2802, end: 2808 } },
            loc: { start: 2802, end: 2808 },
          },
          directives: [],
          loc: { start: 2765, end: 2808 },
        },
      ],
      loc: { start: 2713, end: 2810 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 2824, end: 2832 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createFolder', loc: { start: 2837, end: 2849 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'input', loc: { start: 2850, end: 2855 } },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'CreateFolderInput',
                    loc: { start: 2857, end: 2874 },
                  },
                  loc: { start: 2857, end: 2874 },
                },
                loc: { start: 2857, end: 2875 },
              },
              directives: [],
              loc: { start: 2850, end: 2875 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Folder', loc: { start: 2878, end: 2884 } },
            loc: { start: 2878, end: 2884 },
          },
          directives: [],
          loc: { start: 2837, end: 2884 },
        },
      ],
      loc: { start: 2812, end: 2886 },
    },
    {
      kind: 'ObjectTypeDefinition',
      description: {
        kind: 'StringValue',
        value:
          'A folder is the core unit of organization in the asset library.\nFolders can contain other folders and assets.',
        block: true,
        loc: { start: 2888, end: 3009 },
      },
      name: { kind: 'Name', value: 'Folder', loc: { start: 3015, end: 3021 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 3026, end: 3028 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 3030, end: 3032 } },
              loc: { start: 3030, end: 3032 },
            },
            loc: { start: 3030, end: 3033 },
          },
          directives: [],
          loc: { start: 3026, end: 3033 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createdAt', loc: { start: 3036, end: 3045 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 3047, end: 3055 } },
              loc: { start: 3047, end: 3055 },
            },
            loc: { start: 3047, end: 3056 },
          },
          directives: [],
          loc: { start: 3036, end: 3056 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'updatedAt', loc: { start: 3059, end: 3068 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 3070, end: 3078 } },
              loc: { start: 3070, end: 3078 },
            },
            loc: { start: 3070, end: 3079 },
          },
          directives: [],
          loc: { start: 3059, end: 3079 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value: 'A human readable name for the folder.',
            block: true,
            loc: { start: 3082, end: 3133 },
          },
          name: { kind: 'Name', value: 'name', loc: { start: 3136, end: 3140 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 3142, end: 3156 } },
              loc: { start: 3142, end: 3156 },
            },
            loc: { start: 3142, end: 3157 },
          },
          directives: [],
          loc: { start: 3082, end: 3157 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value:
              'The path of the folder, relative to the root folder.\nAll paths begin with a slash.',
            block: true,
            loc: { start: 3160, end: 3260 },
          },
          name: { kind: 'Name', value: 'path', loc: { start: 3263, end: 3267 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 3269, end: 3283 } },
              loc: { start: 3269, end: 3283 },
            },
            loc: { start: 3269, end: 3284 },
          },
          directives: [],
          loc: { start: 3160, end: 3284 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'parent', loc: { start: 3287, end: 3293 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Folder', loc: { start: 3295, end: 3301 } },
            loc: { start: 3295, end: 3301 },
          },
          directives: [],
          loc: { start: 3287, end: 3301 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value: 'Direct children of the folder.',
            block: true,
            loc: { start: 3304, end: 3348 },
          },
          name: { kind: 'Name', value: 'children', loc: { start: 3351, end: 3359 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'Folder', loc: { start: 3362, end: 3368 } },
                  loc: { start: 3362, end: 3368 },
                },
                loc: { start: 3362, end: 3369 },
              },
              loc: { start: 3361, end: 3370 },
            },
            loc: { start: 3361, end: 3371 },
          },
          directives: [],
          loc: { start: 3304, end: 3371 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value:
              "Useful for when you want to display a folder's contents in a tree view.\nNOTE: The asset type is an interface and will not reveal details of the underling asset type",
            block: true,
            loc: { start: 3374, end: 3556 },
          },
          name: { kind: 'Name', value: 'assets', loc: { start: 3559, end: 3565 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'assetType', loc: { start: 3566, end: 3575 } },
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'AssetType', loc: { start: 3577, end: 3586 } },
                loc: { start: 3577, end: 3586 },
              },
              directives: [],
              loc: { start: 3566, end: 3586 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'Asset', loc: { start: 3590, end: 3595 } },
                  loc: { start: 3590, end: 3595 },
                },
                loc: { start: 3590, end: 3596 },
              },
              loc: { start: 3589, end: 3597 },
            },
            loc: { start: 3589, end: 3598 },
          },
          directives: [],
          loc: { start: 3374, end: 3598 },
        },
      ],
      loc: { start: 2888, end: 3600 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: { kind: 'Name', value: 'CreateFolderInput', loc: { start: 3608, end: 3625 } },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          description: {
            kind: 'StringValue',
            value:
              'The parent folder\'s path.\nIf you want to create a folder at the root level, use "/".',
            block: true,
            loc: { start: 3630, end: 3732 },
          },
          name: { kind: 'Name', value: 'parentPath', loc: { start: 3735, end: 3745 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 3747, end: 3761 } },
              loc: { start: 3747, end: 3761 },
            },
            loc: { start: 3747, end: 3762 },
          },
          directives: [],
          loc: { start: 3630, end: 3762 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 3765, end: 3769 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 3771, end: 3785 } },
              loc: { start: 3771, end: 3785 },
            },
            loc: { start: 3771, end: 3786 },
          },
          directives: [],
          loc: { start: 3765, end: 3786 },
        },
      ],
      loc: { start: 3602, end: 3788 },
    },
  ],
  loc: { start: 0, end: 3789 },
} as unknown as DocumentNode;
