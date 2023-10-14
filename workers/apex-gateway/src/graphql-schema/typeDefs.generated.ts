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
      ],
      loc: { start: 0, end: 49 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 63, end: 71 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createRichTextAsset', loc: { start: 76, end: 95 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'input', loc: { start: 96, end: 101 } },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'CreateRichTextAssetInput',
                    loc: { start: 103, end: 127 },
                  },
                  loc: { start: 103, end: 127 },
                },
                loc: { start: 103, end: 128 },
              },
              directives: [],
              loc: { start: 96, end: 128 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'RichTextAsset', loc: { start: 131, end: 144 } },
              loc: { start: 131, end: 144 },
            },
            loc: { start: 131, end: 145 },
          },
          directives: [],
          loc: { start: 76, end: 145 },
        },
      ],
      loc: { start: 51, end: 147 },
    },
    {
      kind: 'InterfaceTypeDefinition',
      description: {
        kind: 'StringValue',
        value:
          'An asset is an abstracted object that represents some piece of data in this system.\nAssets have different types and versions.\nAt any given time an asset can have only one "active" version which is the latest version',
        block: true,
        loc: { start: 149, end: 378 },
      },
      name: { kind: 'Name', value: 'Asset', loc: { start: 389, end: 394 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 399, end: 401 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 403, end: 405 } },
              loc: { start: 403, end: 405 },
            },
            loc: { start: 403, end: 406 },
          },
          directives: [],
          loc: { start: 399, end: 406 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createdAt', loc: { start: 409, end: 418 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 420, end: 428 } },
              loc: { start: 420, end: 428 },
            },
            loc: { start: 420, end: 429 },
          },
          directives: [],
          loc: { start: 409, end: 429 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'updatedAt', loc: { start: 432, end: 441 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 443, end: 451 } },
              loc: { start: 443, end: 451 },
            },
            loc: { start: 443, end: 452 },
          },
          directives: [],
          loc: { start: 432, end: 452 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'deletedAt', loc: { start: 455, end: 464 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'DateTime', loc: { start: 466, end: 474 } },
            loc: { start: 466, end: 474 },
          },
          directives: [],
          loc: { start: 455, end: 474 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value:
              'This is a unique identifier that is most useful when sharing asset IDs externally (e.g. in a URL or to another service)',
            block: true,
            loc: { start: 477, end: 610 },
          },
          name: { kind: 'Name', value: 'guid', loc: { start: 613, end: 617 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UUID', loc: { start: 619, end: 623 } },
              loc: { start: 619, end: 623 },
            },
            loc: { start: 619, end: 624 },
          },
          directives: [],
          loc: { start: 477, end: 624 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value: 'All assets must belong to a folder',
            block: true,
            loc: { start: 627, end: 675 },
          },
          name: { kind: 'Name', value: 'folder', loc: { start: 678, end: 684 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Folder', loc: { start: 686, end: 692 } },
              loc: { start: 686, end: 692 },
            },
            loc: { start: 686, end: 693 },
          },
          directives: [],
          loc: { start: 627, end: 693 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value:
              'Reveals the underlying type of this asset. Use this to determine which asset type to query for further details',
            block: true,
            loc: { start: 696, end: 820 },
          },
          name: { kind: 'Name', value: 'type', loc: { start: 823, end: 827 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AssetType', loc: { start: 829, end: 838 } },
              loc: { start: 829, end: 838 },
            },
            loc: { start: 829, end: 839 },
          },
          directives: [],
          loc: { start: 696, end: 839 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'metafields', loc: { start: 842, end: 852 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'MetaField', loc: { start: 855, end: 864 } },
                  loc: { start: 855, end: 864 },
                },
                loc: { start: 855, end: 865 },
              },
              loc: { start: 854, end: 866 },
            },
            loc: { start: 854, end: 867 },
          },
          directives: [],
          loc: { start: 842, end: 867 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'versionSlug', loc: { start: 870, end: 881 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 883, end: 897 } },
              loc: { start: 883, end: 897 },
            },
            loc: { start: 883, end: 898 },
          },
          directives: [],
          loc: { start: 870, end: 898 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'isLatest', loc: { start: 901, end: 909 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean', loc: { start: 911, end: 918 } },
              loc: { start: 911, end: 918 },
            },
            loc: { start: 911, end: 919 },
          },
          directives: [],
          loc: { start: 901, end: 919 },
        },
      ],
      loc: { start: 149, end: 921 },
    },
    {
      kind: 'EnumTypeDefinition',
      name: { kind: 'Name', value: 'AssetType', loc: { start: 928, end: 937 } },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'RICH_TEXT', loc: { start: 942, end: 951 } },
          directives: [],
          loc: { start: 942, end: 951 },
        },
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'VIDEO', loc: { start: 954, end: 959 } },
          directives: [],
          loc: { start: 954, end: 959 },
        },
      ],
      loc: { start: 923, end: 961 },
    },
    {
      kind: 'ObjectTypeDefinition',
      description: {
        kind: 'StringValue',
        value:
          'Every asset can have "data" fields stored alongside it.\nMetafields can have multiple different types, e.g string, json, date, etc.\n- Each type must be serializable to a string\n- Metafields are queriable with high performance (indexed)',
        block: true,
        loc: { start: 963, end: 1213 },
      },
      name: { kind: 'Name', value: 'MetaField', loc: { start: 1219, end: 1228 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1233, end: 1235 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 1237, end: 1239 } },
              loc: { start: 1237, end: 1239 },
            },
            loc: { start: 1237, end: 1240 },
          },
          directives: [],
          loc: { start: 1233, end: 1240 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'key', loc: { start: 1243, end: 1246 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 1248, end: 1262 } },
              loc: { start: 1248, end: 1262 },
            },
            loc: { start: 1248, end: 1263 },
          },
          directives: [],
          loc: { start: 1243, end: 1263 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'valueType', loc: { start: 1266, end: 1275 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'MetaFieldValueType', loc: { start: 1277, end: 1295 } },
              loc: { start: 1277, end: 1295 },
            },
            loc: { start: 1277, end: 1296 },
          },
          directives: [],
          loc: { start: 1266, end: 1296 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'value', loc: { start: 1299, end: 1304 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 1306, end: 1320 } },
              loc: { start: 1306, end: 1320 },
            },
            loc: { start: 1306, end: 1321 },
          },
          directives: [],
          loc: { start: 1299, end: 1321 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'asset', loc: { start: 1324, end: 1329 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Asset', loc: { start: 1331, end: 1336 } },
              loc: { start: 1331, end: 1336 },
            },
            loc: { start: 1331, end: 1337 },
          },
          directives: [],
          loc: { start: 1324, end: 1337 },
        },
      ],
      loc: { start: 963, end: 1339 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'MetafieldInput', loc: { start: 1346, end: 1360 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'key', loc: { start: 1365, end: 1368 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 1370, end: 1384 } },
              loc: { start: 1370, end: 1384 },
            },
            loc: { start: 1370, end: 1385 },
          },
          directives: [],
          loc: { start: 1365, end: 1385 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'valueType', loc: { start: 1388, end: 1397 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'MetaFieldValueType', loc: { start: 1399, end: 1417 } },
              loc: { start: 1399, end: 1417 },
            },
            loc: { start: 1399, end: 1418 },
          },
          directives: [],
          loc: { start: 1388, end: 1418 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'value', loc: { start: 1421, end: 1426 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 1428, end: 1442 } },
              loc: { start: 1428, end: 1442 },
            },
            loc: { start: 1428, end: 1443 },
          },
          directives: [],
          loc: { start: 1421, end: 1443 },
        },
      ],
      loc: { start: 1341, end: 1445 },
    },
    {
      kind: 'EnumTypeDefinition',
      name: { kind: 'Name', value: 'MetaFieldValueType', loc: { start: 1452, end: 1470 } },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'TEXT', loc: { start: 1475, end: 1479 } },
          directives: [],
          loc: { start: 1475, end: 1479 },
        },
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'DATE', loc: { start: 1482, end: 1486 } },
          directives: [],
          loc: { start: 1482, end: 1486 },
        },
      ],
      loc: { start: 1447, end: 1488 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'VideoAsset', loc: { start: 1495, end: 1505 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Asset', loc: { start: 1517, end: 1522 } },
          loc: { start: 1517, end: 1522 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1527, end: 1529 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 1531, end: 1533 } },
              loc: { start: 1531, end: 1533 },
            },
            loc: { start: 1531, end: 1534 },
          },
          directives: [],
          loc: { start: 1527, end: 1534 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createdAt', loc: { start: 1537, end: 1546 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 1548, end: 1556 } },
              loc: { start: 1548, end: 1556 },
            },
            loc: { start: 1548, end: 1557 },
          },
          directives: [],
          loc: { start: 1537, end: 1557 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'updatedAt', loc: { start: 1560, end: 1569 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 1571, end: 1579 } },
              loc: { start: 1571, end: 1579 },
            },
            loc: { start: 1571, end: 1580 },
          },
          directives: [],
          loc: { start: 1560, end: 1580 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'deletedAt', loc: { start: 1583, end: 1592 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'DateTime', loc: { start: 1594, end: 1602 } },
            loc: { start: 1594, end: 1602 },
          },
          directives: [],
          loc: { start: 1583, end: 1602 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'guid', loc: { start: 1605, end: 1609 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UUID', loc: { start: 1611, end: 1615 } },
              loc: { start: 1611, end: 1615 },
            },
            loc: { start: 1611, end: 1616 },
          },
          directives: [],
          loc: { start: 1605, end: 1616 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'folder', loc: { start: 1619, end: 1625 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Folder', loc: { start: 1627, end: 1633 } },
              loc: { start: 1627, end: 1633 },
            },
            loc: { start: 1627, end: 1634 },
          },
          directives: [],
          loc: { start: 1619, end: 1634 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'type', loc: { start: 1637, end: 1641 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AssetType', loc: { start: 1643, end: 1652 } },
              loc: { start: 1643, end: 1652 },
            },
            loc: { start: 1643, end: 1653 },
          },
          directives: [],
          loc: { start: 1637, end: 1653 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'metafields', loc: { start: 1656, end: 1666 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'MetaField', loc: { start: 1669, end: 1678 } },
                  loc: { start: 1669, end: 1678 },
                },
                loc: { start: 1669, end: 1679 },
              },
              loc: { start: 1668, end: 1680 },
            },
            loc: { start: 1668, end: 1681 },
          },
          directives: [],
          loc: { start: 1656, end: 1681 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'versionSlug', loc: { start: 1684, end: 1695 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 1697, end: 1711 } },
              loc: { start: 1697, end: 1711 },
            },
            loc: { start: 1697, end: 1712 },
          },
          directives: [],
          loc: { start: 1684, end: 1712 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'isLatest', loc: { start: 1715, end: 1723 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean', loc: { start: 1725, end: 1732 } },
              loc: { start: 1725, end: 1732 },
            },
            loc: { start: 1725, end: 1733 },
          },
          directives: [],
          loc: { start: 1715, end: 1733 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'cfData', loc: { start: 1736, end: 1742 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CfVideoData', loc: { start: 1744, end: 1755 } },
              loc: { start: 1744, end: 1755 },
            },
            loc: { start: 1744, end: 1756 },
          },
          directives: [],
          loc: { start: 1736, end: 1756 },
        },
      ],
      loc: { start: 1490, end: 1758 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'CfVideoData', loc: { start: 1765, end: 1776 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'uid', loc: { start: 1781, end: 1784 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 1786, end: 1788 } },
              loc: { start: 1786, end: 1788 },
            },
            loc: { start: 1786, end: 1789 },
          },
          directives: [],
          loc: { start: 1781, end: 1789 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'allowedOrigins', loc: { start: 1792, end: 1806 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 1809, end: 1823 } },
                  loc: { start: 1809, end: 1823 },
                },
                loc: { start: 1809, end: 1824 },
              },
              loc: { start: 1808, end: 1825 },
            },
            loc: { start: 1808, end: 1826 },
          },
          directives: [],
          loc: { start: 1792, end: 1826 },
        },
      ],
      loc: { start: 1760, end: 1828 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'RichTextAsset', loc: { start: 1835, end: 1848 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Asset', loc: { start: 1860, end: 1865 } },
          loc: { start: 1860, end: 1865 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1870, end: 1872 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 1874, end: 1876 } },
              loc: { start: 1874, end: 1876 },
            },
            loc: { start: 1874, end: 1877 },
          },
          directives: [],
          loc: { start: 1870, end: 1877 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createdAt', loc: { start: 1880, end: 1889 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 1891, end: 1899 } },
              loc: { start: 1891, end: 1899 },
            },
            loc: { start: 1891, end: 1900 },
          },
          directives: [],
          loc: { start: 1880, end: 1900 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'updatedAt', loc: { start: 1903, end: 1912 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 1914, end: 1922 } },
              loc: { start: 1914, end: 1922 },
            },
            loc: { start: 1914, end: 1923 },
          },
          directives: [],
          loc: { start: 1903, end: 1923 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'deletedAt', loc: { start: 1926, end: 1935 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'DateTime', loc: { start: 1937, end: 1945 } },
            loc: { start: 1937, end: 1945 },
          },
          directives: [],
          loc: { start: 1926, end: 1945 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'guid', loc: { start: 1948, end: 1952 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UUID', loc: { start: 1954, end: 1958 } },
              loc: { start: 1954, end: 1958 },
            },
            loc: { start: 1954, end: 1959 },
          },
          directives: [],
          loc: { start: 1948, end: 1959 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'folder', loc: { start: 1962, end: 1968 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Folder', loc: { start: 1970, end: 1976 } },
              loc: { start: 1970, end: 1976 },
            },
            loc: { start: 1970, end: 1977 },
          },
          directives: [],
          loc: { start: 1962, end: 1977 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'type', loc: { start: 1980, end: 1984 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AssetType', loc: { start: 1986, end: 1995 } },
              loc: { start: 1986, end: 1995 },
            },
            loc: { start: 1986, end: 1996 },
          },
          directives: [],
          loc: { start: 1980, end: 1996 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'metafields', loc: { start: 1999, end: 2009 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'MetaField', loc: { start: 2012, end: 2021 } },
                  loc: { start: 2012, end: 2021 },
                },
                loc: { start: 2012, end: 2022 },
              },
              loc: { start: 2011, end: 2023 },
            },
            loc: { start: 2011, end: 2024 },
          },
          directives: [],
          loc: { start: 1999, end: 2024 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'versionSlug', loc: { start: 2027, end: 2038 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 2040, end: 2054 } },
              loc: { start: 2040, end: 2054 },
            },
            loc: { start: 2040, end: 2055 },
          },
          directives: [],
          loc: { start: 2027, end: 2055 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'isLatest', loc: { start: 2058, end: 2066 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean', loc: { start: 2068, end: 2075 } },
              loc: { start: 2068, end: 2075 },
            },
            loc: { start: 2068, end: 2076 },
          },
          directives: [],
          loc: { start: 2058, end: 2076 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value:
              'The name of the editor used to create this asset\nCan be used to interpret the format of JSON in contentJson',
            block: true,
            loc: { start: 2079, end: 2204 },
          },
          name: { kind: 'Name', value: 'editorName', loc: { start: 2207, end: 2217 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 2219, end: 2233 } },
              loc: { start: 2219, end: 2233 },
            },
            loc: { start: 2219, end: 2234 },
          },
          directives: [],
          loc: { start: 2079, end: 2234 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value:
              'The JSON representation of the editor state\nEditors serialize their content differently.\nRefer to editorName to find out what editor was used to create this JSON.',
            block: true,
            loc: { start: 2237, end: 2421 },
          },
          name: { kind: 'Name', value: 'contentJson', loc: { start: 2424, end: 2435 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'JSONObject', loc: { start: 2437, end: 2447 } },
              loc: { start: 2437, end: 2447 },
            },
            loc: { start: 2437, end: 2448 },
          },
          directives: [],
          loc: { start: 2237, end: 2448 },
        },
      ],
      loc: { start: 1830, end: 2450 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: { kind: 'Name', value: 'CreateRichTextAssetInput', loc: { start: 2458, end: 2482 } },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'folderPath', loc: { start: 2487, end: 2497 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 2499, end: 2513 } },
              loc: { start: 2499, end: 2513 },
            },
            loc: { start: 2499, end: 2514 },
          },
          directives: [],
          loc: { start: 2487, end: 2514 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'editorName', loc: { start: 2517, end: 2527 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 2529, end: 2543 } },
              loc: { start: 2529, end: 2543 },
            },
            loc: { start: 2529, end: 2544 },
          },
          directives: [],
          loc: { start: 2517, end: 2544 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'contentJson', loc: { start: 2547, end: 2558 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'JSON', loc: { start: 2560, end: 2564 } },
              loc: { start: 2560, end: 2564 },
            },
            loc: { start: 2560, end: 2565 },
          },
          directives: [],
          loc: { start: 2547, end: 2565 },
        },
      ],
      loc: { start: 2452, end: 2567 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Query', loc: { start: 2573, end: 2578 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 2568, end: 2578 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 2585, end: 2593 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 2580, end: 2593 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'DateTime', loc: { start: 2602, end: 2610 } },
      directives: [],
      loc: { start: 2595, end: 2610 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'UUID', loc: { start: 2619, end: 2623 } },
      directives: [],
      loc: { start: 2612, end: 2623 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'JSON', loc: { start: 2632, end: 2636 } },
      directives: [],
      loc: { start: 2625, end: 2636 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'JSONObject', loc: { start: 2645, end: 2655 } },
      directives: [],
      loc: { start: 2638, end: 2655 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 2664, end: 2678 } },
      directives: [],
      loc: { start: 2657, end: 2678 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 2691, end: 2696 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'folderById', loc: { start: 2701, end: 2711 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'id', loc: { start: 2712, end: 2714 } },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'ID', loc: { start: 2716, end: 2718 } },
                  loc: { start: 2716, end: 2718 },
                },
                loc: { start: 2716, end: 2719 },
              },
              directives: [],
              loc: { start: 2712, end: 2719 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Folder', loc: { start: 2722, end: 2728 } },
            loc: { start: 2722, end: 2728 },
          },
          directives: [],
          loc: { start: 2701, end: 2728 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'folderByPath', loc: { start: 2731, end: 2743 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'path', loc: { start: 2744, end: 2748 } },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 2750, end: 2764 } },
                  loc: { start: 2750, end: 2764 },
                },
                loc: { start: 2750, end: 2765 },
              },
              directives: [],
              loc: { start: 2744, end: 2765 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Folder', loc: { start: 2768, end: 2774 } },
            loc: { start: 2768, end: 2774 },
          },
          directives: [],
          loc: { start: 2731, end: 2774 },
        },
      ],
      loc: { start: 2679, end: 2776 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 2790, end: 2798 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createFolder', loc: { start: 2803, end: 2815 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'input', loc: { start: 2816, end: 2821 } },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'CreateFolderInput',
                    loc: { start: 2823, end: 2840 },
                  },
                  loc: { start: 2823, end: 2840 },
                },
                loc: { start: 2823, end: 2841 },
              },
              directives: [],
              loc: { start: 2816, end: 2841 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Folder', loc: { start: 2844, end: 2850 } },
            loc: { start: 2844, end: 2850 },
          },
          directives: [],
          loc: { start: 2803, end: 2850 },
        },
      ],
      loc: { start: 2778, end: 2852 },
    },
    {
      kind: 'ObjectTypeDefinition',
      description: {
        kind: 'StringValue',
        value:
          'A folder is the core unit of organization in the asset library.\nFolders can contain other folders and assets.',
        block: true,
        loc: { start: 2854, end: 2975 },
      },
      name: { kind: 'Name', value: 'Folder', loc: { start: 2981, end: 2987 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 2992, end: 2994 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 2996, end: 2998 } },
              loc: { start: 2996, end: 2998 },
            },
            loc: { start: 2996, end: 2999 },
          },
          directives: [],
          loc: { start: 2992, end: 2999 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createdAt', loc: { start: 3002, end: 3011 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 3013, end: 3021 } },
              loc: { start: 3013, end: 3021 },
            },
            loc: { start: 3013, end: 3022 },
          },
          directives: [],
          loc: { start: 3002, end: 3022 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'updatedAt', loc: { start: 3025, end: 3034 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 3036, end: 3044 } },
              loc: { start: 3036, end: 3044 },
            },
            loc: { start: 3036, end: 3045 },
          },
          directives: [],
          loc: { start: 3025, end: 3045 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value: 'A human readable name for the folder.',
            block: true,
            loc: { start: 3048, end: 3099 },
          },
          name: { kind: 'Name', value: 'name', loc: { start: 3102, end: 3106 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 3108, end: 3122 } },
              loc: { start: 3108, end: 3122 },
            },
            loc: { start: 3108, end: 3123 },
          },
          directives: [],
          loc: { start: 3048, end: 3123 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value:
              'The path of the folder, relative to the root folder.\nAll paths begin with a slash.',
            block: true,
            loc: { start: 3126, end: 3226 },
          },
          name: { kind: 'Name', value: 'path', loc: { start: 3229, end: 3233 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 3235, end: 3249 } },
              loc: { start: 3235, end: 3249 },
            },
            loc: { start: 3235, end: 3250 },
          },
          directives: [],
          loc: { start: 3126, end: 3250 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'parent', loc: { start: 3253, end: 3259 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Folder', loc: { start: 3261, end: 3267 } },
            loc: { start: 3261, end: 3267 },
          },
          directives: [],
          loc: { start: 3253, end: 3267 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value: 'Direct children of the folder.',
            block: true,
            loc: { start: 3270, end: 3314 },
          },
          name: { kind: 'Name', value: 'children', loc: { start: 3317, end: 3325 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'Folder', loc: { start: 3328, end: 3334 } },
                  loc: { start: 3328, end: 3334 },
                },
                loc: { start: 3328, end: 3335 },
              },
              loc: { start: 3327, end: 3336 },
            },
            loc: { start: 3327, end: 3337 },
          },
          directives: [],
          loc: { start: 3270, end: 3337 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value:
              "Useful for when you want to display a folder's contents in a tree view.\nNOTE: The asset type is an interface and will not reveal details of the underling asset type",
            block: true,
            loc: { start: 3340, end: 3522 },
          },
          name: { kind: 'Name', value: 'assets', loc: { start: 3525, end: 3531 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'assetType', loc: { start: 3532, end: 3541 } },
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'AssetType', loc: { start: 3543, end: 3552 } },
                loc: { start: 3543, end: 3552 },
              },
              directives: [],
              loc: { start: 3532, end: 3552 },
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
                  name: { kind: 'Name', value: 'Asset', loc: { start: 3556, end: 3561 } },
                  loc: { start: 3556, end: 3561 },
                },
                loc: { start: 3556, end: 3562 },
              },
              loc: { start: 3555, end: 3563 },
            },
            loc: { start: 3555, end: 3564 },
          },
          directives: [],
          loc: { start: 3340, end: 3564 },
        },
      ],
      loc: { start: 2854, end: 3566 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: { kind: 'Name', value: 'CreateFolderInput', loc: { start: 3574, end: 3591 } },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          description: {
            kind: 'StringValue',
            value:
              'The parent folder\'s path.\nIf you want to create a folder at the root level, use "/".',
            block: true,
            loc: { start: 3596, end: 3698 },
          },
          name: { kind: 'Name', value: 'parentPath', loc: { start: 3701, end: 3711 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 3713, end: 3727 } },
              loc: { start: 3713, end: 3727 },
            },
            loc: { start: 3713, end: 3728 },
          },
          directives: [],
          loc: { start: 3596, end: 3728 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 3731, end: 3735 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 3737, end: 3751 } },
              loc: { start: 3737, end: 3751 },
            },
            loc: { start: 3737, end: 3752 },
          },
          directives: [],
          loc: { start: 3731, end: 3752 },
        },
      ],
      loc: { start: 3568, end: 3754 },
    },
  ],
  loc: { start: 0, end: 3755 },
} as unknown as DocumentNode;
