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
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'richTextAssetById', loc: { start: 84, end: 101 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'id', loc: { start: 102, end: 104 } },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'ID', loc: { start: 106, end: 108 } },
                  loc: { start: 106, end: 108 },
                },
                loc: { start: 106, end: 109 },
              },
              directives: [],
              loc: { start: 102, end: 109 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'RichTextAsset', loc: { start: 112, end: 125 } },
            loc: { start: 112, end: 125 },
          },
          directives: [],
          loc: { start: 84, end: 125 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'richTextAssetByGuid', loc: { start: 128, end: 147 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'guid', loc: { start: 148, end: 152 } },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'UUID', loc: { start: 154, end: 158 } },
                  loc: { start: 154, end: 158 },
                },
                loc: { start: 154, end: 159 },
              },
              directives: [],
              loc: { start: 148, end: 159 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'RichTextAsset', loc: { start: 162, end: 175 } },
            loc: { start: 162, end: 175 },
          },
          directives: [],
          loc: { start: 128, end: 175 },
        },
      ],
      loc: { start: 0, end: 177 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 191, end: 199 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createRichTextAsset', loc: { start: 204, end: 223 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'input', loc: { start: 224, end: 229 } },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'CreateRichTextAssetInput',
                    loc: { start: 231, end: 255 },
                  },
                  loc: { start: 231, end: 255 },
                },
                loc: { start: 231, end: 256 },
              },
              directives: [],
              loc: { start: 224, end: 256 },
            },
          ],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'RichTextAsset', loc: { start: 259, end: 272 } },
              loc: { start: 259, end: 272 },
            },
            loc: { start: 259, end: 273 },
          },
          directives: [],
          loc: { start: 204, end: 273 },
        },
      ],
      loc: { start: 179, end: 275 },
    },
    {
      kind: 'InterfaceTypeDefinition',
      description: {
        kind: 'StringValue',
        value:
          'An asset is an abstracted object that represents some piece of data in this system.\nAssets have different types and versions.\nAt any given time an asset can have only one "active" version which is the latest version',
        block: true,
        loc: { start: 277, end: 506 },
      },
      name: { kind: 'Name', value: 'Asset', loc: { start: 517, end: 522 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 527, end: 529 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 531, end: 533 } },
              loc: { start: 531, end: 533 },
            },
            loc: { start: 531, end: 534 },
          },
          directives: [],
          loc: { start: 527, end: 534 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createdAt', loc: { start: 537, end: 546 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 548, end: 556 } },
              loc: { start: 548, end: 556 },
            },
            loc: { start: 548, end: 557 },
          },
          directives: [],
          loc: { start: 537, end: 557 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'updatedAt', loc: { start: 560, end: 569 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 571, end: 579 } },
              loc: { start: 571, end: 579 },
            },
            loc: { start: 571, end: 580 },
          },
          directives: [],
          loc: { start: 560, end: 580 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'deletedAt', loc: { start: 583, end: 592 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'DateTime', loc: { start: 594, end: 602 } },
            loc: { start: 594, end: 602 },
          },
          directives: [],
          loc: { start: 583, end: 602 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value:
              'This is a unique identifier that is most useful when sharing asset IDs externally (e.g. in a URL or to another service)',
            block: true,
            loc: { start: 605, end: 738 },
          },
          name: { kind: 'Name', value: 'guid', loc: { start: 741, end: 745 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UUID', loc: { start: 747, end: 751 } },
              loc: { start: 747, end: 751 },
            },
            loc: { start: 747, end: 752 },
          },
          directives: [],
          loc: { start: 605, end: 752 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value: 'All assets must belong to a folder',
            block: true,
            loc: { start: 755, end: 803 },
          },
          name: { kind: 'Name', value: 'folder', loc: { start: 806, end: 812 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Folder', loc: { start: 814, end: 820 } },
              loc: { start: 814, end: 820 },
            },
            loc: { start: 814, end: 821 },
          },
          directives: [],
          loc: { start: 755, end: 821 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value:
              'Reveals the underlying type of this asset. Use this to determine which asset type to query for further details',
            block: true,
            loc: { start: 824, end: 948 },
          },
          name: { kind: 'Name', value: 'type', loc: { start: 951, end: 955 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AssetType', loc: { start: 957, end: 966 } },
              loc: { start: 957, end: 966 },
            },
            loc: { start: 957, end: 967 },
          },
          directives: [],
          loc: { start: 824, end: 967 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'metafields', loc: { start: 970, end: 980 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'MetaField', loc: { start: 983, end: 992 } },
                  loc: { start: 983, end: 992 },
                },
                loc: { start: 983, end: 993 },
              },
              loc: { start: 982, end: 994 },
            },
            loc: { start: 982, end: 995 },
          },
          directives: [],
          loc: { start: 970, end: 995 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'versionSlug', loc: { start: 998, end: 1009 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 1011, end: 1025 } },
              loc: { start: 1011, end: 1025 },
            },
            loc: { start: 1011, end: 1026 },
          },
          directives: [],
          loc: { start: 998, end: 1026 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'isLatest', loc: { start: 1029, end: 1037 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean', loc: { start: 1039, end: 1046 } },
              loc: { start: 1039, end: 1046 },
            },
            loc: { start: 1039, end: 1047 },
          },
          directives: [],
          loc: { start: 1029, end: 1047 },
        },
      ],
      loc: { start: 277, end: 1049 },
    },
    {
      kind: 'EnumTypeDefinition',
      name: { kind: 'Name', value: 'AssetType', loc: { start: 1056, end: 1065 } },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'RICH_TEXT', loc: { start: 1070, end: 1079 } },
          directives: [],
          loc: { start: 1070, end: 1079 },
        },
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'VIDEO', loc: { start: 1082, end: 1087 } },
          directives: [],
          loc: { start: 1082, end: 1087 },
        },
      ],
      loc: { start: 1051, end: 1089 },
    },
    {
      kind: 'ObjectTypeDefinition',
      description: {
        kind: 'StringValue',
        value:
          'Every asset can have "data" fields stored alongside it.\nMetafields can have multiple different types, e.g string, json, date, etc.\n- Each type must be serializable to a string\n- Metafields are queriable with high performance (indexed)',
        block: true,
        loc: { start: 1091, end: 1341 },
      },
      name: { kind: 'Name', value: 'MetaField', loc: { start: 1347, end: 1356 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1361, end: 1363 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 1365, end: 1367 } },
              loc: { start: 1365, end: 1367 },
            },
            loc: { start: 1365, end: 1368 },
          },
          directives: [],
          loc: { start: 1361, end: 1368 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'key', loc: { start: 1371, end: 1374 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 1376, end: 1390 } },
              loc: { start: 1376, end: 1390 },
            },
            loc: { start: 1376, end: 1391 },
          },
          directives: [],
          loc: { start: 1371, end: 1391 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'valueType', loc: { start: 1394, end: 1403 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'MetaFieldValueType', loc: { start: 1405, end: 1423 } },
              loc: { start: 1405, end: 1423 },
            },
            loc: { start: 1405, end: 1424 },
          },
          directives: [],
          loc: { start: 1394, end: 1424 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'value', loc: { start: 1427, end: 1432 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 1434, end: 1448 } },
              loc: { start: 1434, end: 1448 },
            },
            loc: { start: 1434, end: 1449 },
          },
          directives: [],
          loc: { start: 1427, end: 1449 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'asset', loc: { start: 1452, end: 1457 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Asset', loc: { start: 1459, end: 1464 } },
              loc: { start: 1459, end: 1464 },
            },
            loc: { start: 1459, end: 1465 },
          },
          directives: [],
          loc: { start: 1452, end: 1465 },
        },
      ],
      loc: { start: 1091, end: 1467 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'MetafieldInput', loc: { start: 1474, end: 1488 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'key', loc: { start: 1493, end: 1496 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 1498, end: 1512 } },
              loc: { start: 1498, end: 1512 },
            },
            loc: { start: 1498, end: 1513 },
          },
          directives: [],
          loc: { start: 1493, end: 1513 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'valueType', loc: { start: 1516, end: 1525 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'MetaFieldValueType', loc: { start: 1527, end: 1545 } },
              loc: { start: 1527, end: 1545 },
            },
            loc: { start: 1527, end: 1546 },
          },
          directives: [],
          loc: { start: 1516, end: 1546 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'value', loc: { start: 1549, end: 1554 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 1556, end: 1570 } },
              loc: { start: 1556, end: 1570 },
            },
            loc: { start: 1556, end: 1571 },
          },
          directives: [],
          loc: { start: 1549, end: 1571 },
        },
      ],
      loc: { start: 1469, end: 1573 },
    },
    {
      kind: 'EnumTypeDefinition',
      name: { kind: 'Name', value: 'MetaFieldValueType', loc: { start: 1580, end: 1598 } },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'TEXT', loc: { start: 1603, end: 1607 } },
          directives: [],
          loc: { start: 1603, end: 1607 },
        },
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'DATE', loc: { start: 1610, end: 1614 } },
          directives: [],
          loc: { start: 1610, end: 1614 },
        },
      ],
      loc: { start: 1575, end: 1616 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'VideoAsset', loc: { start: 1623, end: 1633 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Asset', loc: { start: 1645, end: 1650 } },
          loc: { start: 1645, end: 1650 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1655, end: 1657 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 1659, end: 1661 } },
              loc: { start: 1659, end: 1661 },
            },
            loc: { start: 1659, end: 1662 },
          },
          directives: [],
          loc: { start: 1655, end: 1662 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createdAt', loc: { start: 1665, end: 1674 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 1676, end: 1684 } },
              loc: { start: 1676, end: 1684 },
            },
            loc: { start: 1676, end: 1685 },
          },
          directives: [],
          loc: { start: 1665, end: 1685 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'updatedAt', loc: { start: 1688, end: 1697 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 1699, end: 1707 } },
              loc: { start: 1699, end: 1707 },
            },
            loc: { start: 1699, end: 1708 },
          },
          directives: [],
          loc: { start: 1688, end: 1708 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'deletedAt', loc: { start: 1711, end: 1720 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'DateTime', loc: { start: 1722, end: 1730 } },
            loc: { start: 1722, end: 1730 },
          },
          directives: [],
          loc: { start: 1711, end: 1730 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'guid', loc: { start: 1733, end: 1737 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UUID', loc: { start: 1739, end: 1743 } },
              loc: { start: 1739, end: 1743 },
            },
            loc: { start: 1739, end: 1744 },
          },
          directives: [],
          loc: { start: 1733, end: 1744 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'folder', loc: { start: 1747, end: 1753 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Folder', loc: { start: 1755, end: 1761 } },
              loc: { start: 1755, end: 1761 },
            },
            loc: { start: 1755, end: 1762 },
          },
          directives: [],
          loc: { start: 1747, end: 1762 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'type', loc: { start: 1765, end: 1769 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AssetType', loc: { start: 1771, end: 1780 } },
              loc: { start: 1771, end: 1780 },
            },
            loc: { start: 1771, end: 1781 },
          },
          directives: [],
          loc: { start: 1765, end: 1781 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'metafields', loc: { start: 1784, end: 1794 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'MetaField', loc: { start: 1797, end: 1806 } },
                  loc: { start: 1797, end: 1806 },
                },
                loc: { start: 1797, end: 1807 },
              },
              loc: { start: 1796, end: 1808 },
            },
            loc: { start: 1796, end: 1809 },
          },
          directives: [],
          loc: { start: 1784, end: 1809 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'versionSlug', loc: { start: 1812, end: 1823 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 1825, end: 1839 } },
              loc: { start: 1825, end: 1839 },
            },
            loc: { start: 1825, end: 1840 },
          },
          directives: [],
          loc: { start: 1812, end: 1840 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'isLatest', loc: { start: 1843, end: 1851 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean', loc: { start: 1853, end: 1860 } },
              loc: { start: 1853, end: 1860 },
            },
            loc: { start: 1853, end: 1861 },
          },
          directives: [],
          loc: { start: 1843, end: 1861 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'cfData', loc: { start: 1864, end: 1870 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CfVideoData', loc: { start: 1872, end: 1883 } },
              loc: { start: 1872, end: 1883 },
            },
            loc: { start: 1872, end: 1884 },
          },
          directives: [],
          loc: { start: 1864, end: 1884 },
        },
      ],
      loc: { start: 1618, end: 1886 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'CfVideoData', loc: { start: 1893, end: 1904 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'uid', loc: { start: 1909, end: 1912 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 1914, end: 1916 } },
              loc: { start: 1914, end: 1916 },
            },
            loc: { start: 1914, end: 1917 },
          },
          directives: [],
          loc: { start: 1909, end: 1917 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'allowedOrigins', loc: { start: 1920, end: 1934 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 1937, end: 1951 } },
                  loc: { start: 1937, end: 1951 },
                },
                loc: { start: 1937, end: 1952 },
              },
              loc: { start: 1936, end: 1953 },
            },
            loc: { start: 1936, end: 1954 },
          },
          directives: [],
          loc: { start: 1920, end: 1954 },
        },
      ],
      loc: { start: 1888, end: 1956 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'RichTextAsset', loc: { start: 1963, end: 1976 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Asset', loc: { start: 1988, end: 1993 } },
          loc: { start: 1988, end: 1993 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1998, end: 2000 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 2002, end: 2004 } },
              loc: { start: 2002, end: 2004 },
            },
            loc: { start: 2002, end: 2005 },
          },
          directives: [],
          loc: { start: 1998, end: 2005 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createdAt', loc: { start: 2008, end: 2017 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 2019, end: 2027 } },
              loc: { start: 2019, end: 2027 },
            },
            loc: { start: 2019, end: 2028 },
          },
          directives: [],
          loc: { start: 2008, end: 2028 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'updatedAt', loc: { start: 2031, end: 2040 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 2042, end: 2050 } },
              loc: { start: 2042, end: 2050 },
            },
            loc: { start: 2042, end: 2051 },
          },
          directives: [],
          loc: { start: 2031, end: 2051 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'deletedAt', loc: { start: 2054, end: 2063 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'DateTime', loc: { start: 2065, end: 2073 } },
            loc: { start: 2065, end: 2073 },
          },
          directives: [],
          loc: { start: 2054, end: 2073 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'guid', loc: { start: 2076, end: 2080 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UUID', loc: { start: 2082, end: 2086 } },
              loc: { start: 2082, end: 2086 },
            },
            loc: { start: 2082, end: 2087 },
          },
          directives: [],
          loc: { start: 2076, end: 2087 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'folder', loc: { start: 2090, end: 2096 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Folder', loc: { start: 2098, end: 2104 } },
              loc: { start: 2098, end: 2104 },
            },
            loc: { start: 2098, end: 2105 },
          },
          directives: [],
          loc: { start: 2090, end: 2105 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'type', loc: { start: 2108, end: 2112 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AssetType', loc: { start: 2114, end: 2123 } },
              loc: { start: 2114, end: 2123 },
            },
            loc: { start: 2114, end: 2124 },
          },
          directives: [],
          loc: { start: 2108, end: 2124 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'metafields', loc: { start: 2127, end: 2137 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'MetaField', loc: { start: 2140, end: 2149 } },
                  loc: { start: 2140, end: 2149 },
                },
                loc: { start: 2140, end: 2150 },
              },
              loc: { start: 2139, end: 2151 },
            },
            loc: { start: 2139, end: 2152 },
          },
          directives: [],
          loc: { start: 2127, end: 2152 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'versionSlug', loc: { start: 2155, end: 2166 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 2168, end: 2182 } },
              loc: { start: 2168, end: 2182 },
            },
            loc: { start: 2168, end: 2183 },
          },
          directives: [],
          loc: { start: 2155, end: 2183 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'isLatest', loc: { start: 2186, end: 2194 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean', loc: { start: 2196, end: 2203 } },
              loc: { start: 2196, end: 2203 },
            },
            loc: { start: 2196, end: 2204 },
          },
          directives: [],
          loc: { start: 2186, end: 2204 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value:
              'The name of the editor used to create this asset\nCan be used to interpret the format of JSON in contentJson',
            block: true,
            loc: { start: 2207, end: 2332 },
          },
          name: { kind: 'Name', value: 'editorName', loc: { start: 2335, end: 2345 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 2347, end: 2361 } },
              loc: { start: 2347, end: 2361 },
            },
            loc: { start: 2347, end: 2362 },
          },
          directives: [],
          loc: { start: 2207, end: 2362 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value:
              'The JSON representation of the editor state\nEditors serialize their content differently.\nRefer to editorName to find out what editor was used to create this JSON.',
            block: true,
            loc: { start: 2365, end: 2549 },
          },
          name: { kind: 'Name', value: 'contentJson', loc: { start: 2552, end: 2563 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'JSONObject', loc: { start: 2565, end: 2575 } },
              loc: { start: 2565, end: 2575 },
            },
            loc: { start: 2565, end: 2576 },
          },
          directives: [],
          loc: { start: 2365, end: 2576 },
        },
      ],
      loc: { start: 1958, end: 2578 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: { kind: 'Name', value: 'CreateRichTextAssetInput', loc: { start: 2586, end: 2610 } },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'folderPath', loc: { start: 2615, end: 2625 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 2627, end: 2641 } },
              loc: { start: 2627, end: 2641 },
            },
            loc: { start: 2627, end: 2642 },
          },
          directives: [],
          loc: { start: 2615, end: 2642 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'editorName', loc: { start: 2645, end: 2655 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 2657, end: 2671 } },
              loc: { start: 2657, end: 2671 },
            },
            loc: { start: 2657, end: 2672 },
          },
          directives: [],
          loc: { start: 2645, end: 2672 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'contentJson', loc: { start: 2675, end: 2686 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'JSON', loc: { start: 2688, end: 2692 } },
              loc: { start: 2688, end: 2692 },
            },
            loc: { start: 2688, end: 2693 },
          },
          directives: [],
          loc: { start: 2675, end: 2693 },
        },
      ],
      loc: { start: 2580, end: 2695 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Query', loc: { start: 2701, end: 2706 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 2696, end: 2706 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 2713, end: 2721 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 2708, end: 2721 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'DateTime', loc: { start: 2730, end: 2738 } },
      directives: [],
      loc: { start: 2723, end: 2738 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'UUID', loc: { start: 2747, end: 2751 } },
      directives: [],
      loc: { start: 2740, end: 2751 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'JSON', loc: { start: 2760, end: 2764 } },
      directives: [],
      loc: { start: 2753, end: 2764 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'JSONObject', loc: { start: 2773, end: 2783 } },
      directives: [],
      loc: { start: 2766, end: 2783 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 2792, end: 2806 } },
      directives: [],
      loc: { start: 2785, end: 2806 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 2819, end: 2824 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'folderById', loc: { start: 2829, end: 2839 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'id', loc: { start: 2840, end: 2842 } },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'ID', loc: { start: 2844, end: 2846 } },
                  loc: { start: 2844, end: 2846 },
                },
                loc: { start: 2844, end: 2847 },
              },
              directives: [],
              loc: { start: 2840, end: 2847 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Folder', loc: { start: 2850, end: 2856 } },
            loc: { start: 2850, end: 2856 },
          },
          directives: [],
          loc: { start: 2829, end: 2856 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'folderByPath', loc: { start: 2859, end: 2871 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'path', loc: { start: 2872, end: 2876 } },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 2878, end: 2892 } },
                  loc: { start: 2878, end: 2892 },
                },
                loc: { start: 2878, end: 2893 },
              },
              directives: [],
              loc: { start: 2872, end: 2893 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Folder', loc: { start: 2896, end: 2902 } },
            loc: { start: 2896, end: 2902 },
          },
          directives: [],
          loc: { start: 2859, end: 2902 },
        },
      ],
      loc: { start: 2807, end: 2904 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 2918, end: 2926 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createFolder', loc: { start: 2931, end: 2943 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'input', loc: { start: 2944, end: 2949 } },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'CreateFolderInput',
                    loc: { start: 2951, end: 2968 },
                  },
                  loc: { start: 2951, end: 2968 },
                },
                loc: { start: 2951, end: 2969 },
              },
              directives: [],
              loc: { start: 2944, end: 2969 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Folder', loc: { start: 2972, end: 2978 } },
            loc: { start: 2972, end: 2978 },
          },
          directives: [],
          loc: { start: 2931, end: 2978 },
        },
      ],
      loc: { start: 2906, end: 2980 },
    },
    {
      kind: 'ObjectTypeDefinition',
      description: {
        kind: 'StringValue',
        value:
          'A folder is the core unit of organization in the asset library.\nFolders can contain other folders and assets.',
        block: true,
        loc: { start: 2982, end: 3103 },
      },
      name: { kind: 'Name', value: 'Folder', loc: { start: 3109, end: 3115 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 3120, end: 3122 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 3124, end: 3126 } },
              loc: { start: 3124, end: 3126 },
            },
            loc: { start: 3124, end: 3127 },
          },
          directives: [],
          loc: { start: 3120, end: 3127 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createdAt', loc: { start: 3130, end: 3139 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 3141, end: 3149 } },
              loc: { start: 3141, end: 3149 },
            },
            loc: { start: 3141, end: 3150 },
          },
          directives: [],
          loc: { start: 3130, end: 3150 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'updatedAt', loc: { start: 3153, end: 3162 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 3164, end: 3172 } },
              loc: { start: 3164, end: 3172 },
            },
            loc: { start: 3164, end: 3173 },
          },
          directives: [],
          loc: { start: 3153, end: 3173 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value: 'A human readable name for the folder.',
            block: true,
            loc: { start: 3176, end: 3227 },
          },
          name: { kind: 'Name', value: 'name', loc: { start: 3230, end: 3234 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 3236, end: 3250 } },
              loc: { start: 3236, end: 3250 },
            },
            loc: { start: 3236, end: 3251 },
          },
          directives: [],
          loc: { start: 3176, end: 3251 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value:
              'The path of the folder, relative to the root folder.\nAll paths begin with a slash.',
            block: true,
            loc: { start: 3254, end: 3354 },
          },
          name: { kind: 'Name', value: 'path', loc: { start: 3357, end: 3361 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 3363, end: 3377 } },
              loc: { start: 3363, end: 3377 },
            },
            loc: { start: 3363, end: 3378 },
          },
          directives: [],
          loc: { start: 3254, end: 3378 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'parent', loc: { start: 3381, end: 3387 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Folder', loc: { start: 3389, end: 3395 } },
            loc: { start: 3389, end: 3395 },
          },
          directives: [],
          loc: { start: 3381, end: 3395 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value: 'Direct children of the folder.',
            block: true,
            loc: { start: 3398, end: 3442 },
          },
          name: { kind: 'Name', value: 'children', loc: { start: 3445, end: 3453 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'Folder', loc: { start: 3456, end: 3462 } },
                  loc: { start: 3456, end: 3462 },
                },
                loc: { start: 3456, end: 3463 },
              },
              loc: { start: 3455, end: 3464 },
            },
            loc: { start: 3455, end: 3465 },
          },
          directives: [],
          loc: { start: 3398, end: 3465 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value:
              "Useful for when you want to display a folder's contents in a tree view.\nNOTE: The asset type is an interface and will not reveal details of the underling asset type",
            block: true,
            loc: { start: 3468, end: 3650 },
          },
          name: { kind: 'Name', value: 'assets', loc: { start: 3653, end: 3659 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'assetType', loc: { start: 3660, end: 3669 } },
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'AssetType', loc: { start: 3671, end: 3680 } },
                loc: { start: 3671, end: 3680 },
              },
              directives: [],
              loc: { start: 3660, end: 3680 },
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
                  name: { kind: 'Name', value: 'Asset', loc: { start: 3684, end: 3689 } },
                  loc: { start: 3684, end: 3689 },
                },
                loc: { start: 3684, end: 3690 },
              },
              loc: { start: 3683, end: 3691 },
            },
            loc: { start: 3683, end: 3692 },
          },
          directives: [],
          loc: { start: 3468, end: 3692 },
        },
      ],
      loc: { start: 2982, end: 3694 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: { kind: 'Name', value: 'CreateFolderInput', loc: { start: 3702, end: 3719 } },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          description: {
            kind: 'StringValue',
            value:
              'The parent folder\'s path.\nIf you want to create a folder at the root level, use "/".',
            block: true,
            loc: { start: 3724, end: 3826 },
          },
          name: { kind: 'Name', value: 'parentPath', loc: { start: 3829, end: 3839 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 3841, end: 3855 } },
              loc: { start: 3841, end: 3855 },
            },
            loc: { start: 3841, end: 3856 },
          },
          directives: [],
          loc: { start: 3724, end: 3856 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 3859, end: 3863 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 3865, end: 3879 } },
              loc: { start: 3865, end: 3879 },
            },
            loc: { start: 3865, end: 3880 },
          },
          directives: [],
          loc: { start: 3859, end: 3880 },
        },
      ],
      loc: { start: 3696, end: 3882 },
    },
  ],
  loc: { start: 0, end: 3883 },
} as unknown as DocumentNode;
