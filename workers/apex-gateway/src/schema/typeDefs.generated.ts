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
      kind: 'InterfaceTypeDefinition',
      description: {
        kind: 'StringValue',
        value:
          'An asset is an abstracted object that represents some piece of data in this system.\nAssets have different types and versions.\nAt any given time an asset can have only one "active" version which is the latest version',
        block: true,
        loc: { start: 51, end: 280 },
      },
      name: { kind: 'Name', value: 'Asset', loc: { start: 291, end: 296 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 301, end: 303 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 305, end: 307 } },
              loc: { start: 305, end: 307 },
            },
            loc: { start: 305, end: 308 },
          },
          directives: [],
          loc: { start: 301, end: 308 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createdAt', loc: { start: 311, end: 320 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 322, end: 330 } },
              loc: { start: 322, end: 330 },
            },
            loc: { start: 322, end: 331 },
          },
          directives: [],
          loc: { start: 311, end: 331 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'updatedAt', loc: { start: 334, end: 343 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 345, end: 353 } },
              loc: { start: 345, end: 353 },
            },
            loc: { start: 345, end: 354 },
          },
          directives: [],
          loc: { start: 334, end: 354 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'deletedAt', loc: { start: 357, end: 366 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'DateTime', loc: { start: 368, end: 376 } },
            loc: { start: 368, end: 376 },
          },
          directives: [],
          loc: { start: 357, end: 376 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value:
              'This is a unique identifier that is most useful when sharing asset IDs externally (e.g. in a URL or to another service)',
            block: true,
            loc: { start: 379, end: 512 },
          },
          name: { kind: 'Name', value: 'guid', loc: { start: 515, end: 519 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UUID', loc: { start: 521, end: 525 } },
              loc: { start: 521, end: 525 },
            },
            loc: { start: 521, end: 526 },
          },
          directives: [],
          loc: { start: 379, end: 526 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value: 'All assets must belong to a folder',
            block: true,
            loc: { start: 529, end: 577 },
          },
          name: { kind: 'Name', value: 'folder', loc: { start: 580, end: 586 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Folder', loc: { start: 588, end: 594 } },
              loc: { start: 588, end: 594 },
            },
            loc: { start: 588, end: 595 },
          },
          directives: [],
          loc: { start: 529, end: 595 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value:
              'Reveals the underlying type of this asset. Use this to determine which asset type to query for further details',
            block: true,
            loc: { start: 598, end: 722 },
          },
          name: { kind: 'Name', value: 'type', loc: { start: 725, end: 729 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AssetType', loc: { start: 731, end: 740 } },
              loc: { start: 731, end: 740 },
            },
            loc: { start: 731, end: 741 },
          },
          directives: [],
          loc: { start: 598, end: 741 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'metafields', loc: { start: 744, end: 754 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'MetaField', loc: { start: 757, end: 766 } },
                  loc: { start: 757, end: 766 },
                },
                loc: { start: 757, end: 767 },
              },
              loc: { start: 756, end: 768 },
            },
            loc: { start: 756, end: 769 },
          },
          directives: [],
          loc: { start: 744, end: 769 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'versionSlug', loc: { start: 772, end: 783 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 785, end: 791 } },
              loc: { start: 785, end: 791 },
            },
            loc: { start: 785, end: 792 },
          },
          directives: [],
          loc: { start: 772, end: 792 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'isLatest', loc: { start: 795, end: 803 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean', loc: { start: 805, end: 812 } },
              loc: { start: 805, end: 812 },
            },
            loc: { start: 805, end: 813 },
          },
          directives: [],
          loc: { start: 795, end: 813 },
        },
      ],
      loc: { start: 51, end: 815 },
    },
    {
      kind: 'EnumTypeDefinition',
      name: { kind: 'Name', value: 'AssetType', loc: { start: 822, end: 831 } },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'RICH_TEXT', loc: { start: 836, end: 845 } },
          directives: [],
          loc: { start: 836, end: 845 },
        },
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'VIDEO', loc: { start: 848, end: 853 } },
          directives: [],
          loc: { start: 848, end: 853 },
        },
      ],
      loc: { start: 817, end: 855 },
    },
    {
      kind: 'ObjectTypeDefinition',
      description: {
        kind: 'StringValue',
        value:
          'Every asset can have "data" fields stored alongside it.\nMetafields can have multiple different types, e.g string, json, date, etc.\n- Each type must be serializable to a string\n- Metafields are queriable with high perforamnce (indexed)',
        block: true,
        loc: { start: 857, end: 1107 },
      },
      name: { kind: 'Name', value: 'MetaField', loc: { start: 1113, end: 1122 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1127, end: 1129 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 1131, end: 1133 } },
              loc: { start: 1131, end: 1133 },
            },
            loc: { start: 1131, end: 1134 },
          },
          directives: [],
          loc: { start: 1127, end: 1134 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'key', loc: { start: 1137, end: 1140 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 1142, end: 1148 } },
              loc: { start: 1142, end: 1148 },
            },
            loc: { start: 1142, end: 1149 },
          },
          directives: [],
          loc: { start: 1137, end: 1149 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'valueType', loc: { start: 1152, end: 1161 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'MetaFieldValueType', loc: { start: 1163, end: 1181 } },
              loc: { start: 1163, end: 1181 },
            },
            loc: { start: 1163, end: 1182 },
          },
          directives: [],
          loc: { start: 1152, end: 1182 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'value', loc: { start: 1185, end: 1190 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'String', loc: { start: 1192, end: 1198 } },
            loc: { start: 1192, end: 1198 },
          },
          directives: [],
          loc: { start: 1185, end: 1198 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'asset', loc: { start: 1201, end: 1206 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Asset', loc: { start: 1208, end: 1213 } },
              loc: { start: 1208, end: 1213 },
            },
            loc: { start: 1208, end: 1214 },
          },
          directives: [],
          loc: { start: 1201, end: 1214 },
        },
      ],
      loc: { start: 857, end: 1216 },
    },
    {
      kind: 'EnumTypeDefinition',
      name: { kind: 'Name', value: 'MetaFieldValueType', loc: { start: 1223, end: 1241 } },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'TEXT', loc: { start: 1246, end: 1250 } },
          directives: [],
          loc: { start: 1246, end: 1250 },
        },
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'DATE', loc: { start: 1253, end: 1257 } },
          directives: [],
          loc: { start: 1253, end: 1257 },
        },
      ],
      loc: { start: 1218, end: 1259 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'VideoAsset', loc: { start: 1266, end: 1276 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Asset', loc: { start: 1288, end: 1293 } },
          loc: { start: 1288, end: 1293 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1298, end: 1300 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 1302, end: 1304 } },
              loc: { start: 1302, end: 1304 },
            },
            loc: { start: 1302, end: 1305 },
          },
          directives: [],
          loc: { start: 1298, end: 1305 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createdAt', loc: { start: 1308, end: 1317 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 1319, end: 1327 } },
              loc: { start: 1319, end: 1327 },
            },
            loc: { start: 1319, end: 1328 },
          },
          directives: [],
          loc: { start: 1308, end: 1328 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'updatedAt', loc: { start: 1331, end: 1340 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 1342, end: 1350 } },
              loc: { start: 1342, end: 1350 },
            },
            loc: { start: 1342, end: 1351 },
          },
          directives: [],
          loc: { start: 1331, end: 1351 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'deletedAt', loc: { start: 1354, end: 1363 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'DateTime', loc: { start: 1365, end: 1373 } },
            loc: { start: 1365, end: 1373 },
          },
          directives: [],
          loc: { start: 1354, end: 1373 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'guid', loc: { start: 1376, end: 1380 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UUID', loc: { start: 1382, end: 1386 } },
              loc: { start: 1382, end: 1386 },
            },
            loc: { start: 1382, end: 1387 },
          },
          directives: [],
          loc: { start: 1376, end: 1387 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'folder', loc: { start: 1390, end: 1396 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Folder', loc: { start: 1398, end: 1404 } },
              loc: { start: 1398, end: 1404 },
            },
            loc: { start: 1398, end: 1405 },
          },
          directives: [],
          loc: { start: 1390, end: 1405 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'type', loc: { start: 1408, end: 1412 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AssetType', loc: { start: 1414, end: 1423 } },
              loc: { start: 1414, end: 1423 },
            },
            loc: { start: 1414, end: 1424 },
          },
          directives: [],
          loc: { start: 1408, end: 1424 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'metafields', loc: { start: 1427, end: 1437 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'MetaField', loc: { start: 1440, end: 1449 } },
                  loc: { start: 1440, end: 1449 },
                },
                loc: { start: 1440, end: 1450 },
              },
              loc: { start: 1439, end: 1451 },
            },
            loc: { start: 1439, end: 1452 },
          },
          directives: [],
          loc: { start: 1427, end: 1452 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'versionSlug', loc: { start: 1455, end: 1466 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 1468, end: 1474 } },
              loc: { start: 1468, end: 1474 },
            },
            loc: { start: 1468, end: 1475 },
          },
          directives: [],
          loc: { start: 1455, end: 1475 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'isLatest', loc: { start: 1478, end: 1486 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean', loc: { start: 1488, end: 1495 } },
              loc: { start: 1488, end: 1495 },
            },
            loc: { start: 1488, end: 1496 },
          },
          directives: [],
          loc: { start: 1478, end: 1496 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'cfData', loc: { start: 1499, end: 1505 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CfVideoData', loc: { start: 1507, end: 1518 } },
              loc: { start: 1507, end: 1518 },
            },
            loc: { start: 1507, end: 1519 },
          },
          directives: [],
          loc: { start: 1499, end: 1519 },
        },
      ],
      loc: { start: 1261, end: 1521 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'CfVideoData', loc: { start: 1528, end: 1539 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'uid', loc: { start: 1544, end: 1547 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 1549, end: 1551 } },
              loc: { start: 1549, end: 1551 },
            },
            loc: { start: 1549, end: 1552 },
          },
          directives: [],
          loc: { start: 1544, end: 1552 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'allowedOrigins', loc: { start: 1555, end: 1569 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'String', loc: { start: 1572, end: 1578 } },
                  loc: { start: 1572, end: 1578 },
                },
                loc: { start: 1572, end: 1579 },
              },
              loc: { start: 1571, end: 1580 },
            },
            loc: { start: 1571, end: 1581 },
          },
          directives: [],
          loc: { start: 1555, end: 1581 },
        },
      ],
      loc: { start: 1523, end: 1583 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'RichTextAsset', loc: { start: 1590, end: 1603 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Asset', loc: { start: 1615, end: 1620 } },
          loc: { start: 1615, end: 1620 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1625, end: 1627 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 1629, end: 1631 } },
              loc: { start: 1629, end: 1631 },
            },
            loc: { start: 1629, end: 1632 },
          },
          directives: [],
          loc: { start: 1625, end: 1632 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createdAt', loc: { start: 1635, end: 1644 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 1646, end: 1654 } },
              loc: { start: 1646, end: 1654 },
            },
            loc: { start: 1646, end: 1655 },
          },
          directives: [],
          loc: { start: 1635, end: 1655 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'updatedAt', loc: { start: 1658, end: 1667 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 1669, end: 1677 } },
              loc: { start: 1669, end: 1677 },
            },
            loc: { start: 1669, end: 1678 },
          },
          directives: [],
          loc: { start: 1658, end: 1678 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'deletedAt', loc: { start: 1681, end: 1690 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'DateTime', loc: { start: 1692, end: 1700 } },
            loc: { start: 1692, end: 1700 },
          },
          directives: [],
          loc: { start: 1681, end: 1700 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'guid', loc: { start: 1703, end: 1707 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UUID', loc: { start: 1709, end: 1713 } },
              loc: { start: 1709, end: 1713 },
            },
            loc: { start: 1709, end: 1714 },
          },
          directives: [],
          loc: { start: 1703, end: 1714 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'folder', loc: { start: 1717, end: 1723 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Folder', loc: { start: 1725, end: 1731 } },
              loc: { start: 1725, end: 1731 },
            },
            loc: { start: 1725, end: 1732 },
          },
          directives: [],
          loc: { start: 1717, end: 1732 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'type', loc: { start: 1735, end: 1739 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AssetType', loc: { start: 1741, end: 1750 } },
              loc: { start: 1741, end: 1750 },
            },
            loc: { start: 1741, end: 1751 },
          },
          directives: [],
          loc: { start: 1735, end: 1751 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'metafields', loc: { start: 1754, end: 1764 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'MetaField', loc: { start: 1767, end: 1776 } },
                  loc: { start: 1767, end: 1776 },
                },
                loc: { start: 1767, end: 1777 },
              },
              loc: { start: 1766, end: 1778 },
            },
            loc: { start: 1766, end: 1779 },
          },
          directives: [],
          loc: { start: 1754, end: 1779 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'versionSlug', loc: { start: 1782, end: 1793 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 1795, end: 1801 } },
              loc: { start: 1795, end: 1801 },
            },
            loc: { start: 1795, end: 1802 },
          },
          directives: [],
          loc: { start: 1782, end: 1802 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'isLatest', loc: { start: 1805, end: 1813 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean', loc: { start: 1815, end: 1822 } },
              loc: { start: 1815, end: 1822 },
            },
            loc: { start: 1815, end: 1823 },
          },
          directives: [],
          loc: { start: 1805, end: 1823 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value:
              'The name of the editor used to create this asset\nCan be used to interpret the format of JSON in contentJson',
            block: true,
            loc: { start: 1826, end: 1951 },
          },
          name: { kind: 'Name', value: 'editorName', loc: { start: 1954, end: 1964 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 1966, end: 1972 } },
              loc: { start: 1966, end: 1972 },
            },
            loc: { start: 1966, end: 1973 },
          },
          directives: [],
          loc: { start: 1826, end: 1973 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value:
              'The JSON representation of the editor state\nEditors serialize their content differently.\nRefer to editorName to find out what editor was used to create this JSON.',
            block: true,
            loc: { start: 1976, end: 2160 },
          },
          name: { kind: 'Name', value: 'contentJson', loc: { start: 2163, end: 2174 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'JSON', loc: { start: 2176, end: 2180 } },
              loc: { start: 2176, end: 2180 },
            },
            loc: { start: 2176, end: 2181 },
          },
          directives: [],
          loc: { start: 1976, end: 2181 },
        },
      ],
      loc: { start: 1585, end: 2183 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Query', loc: { start: 2189, end: 2194 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 2184, end: 2194 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 2201, end: 2209 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 2196, end: 2209 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'DateTime', loc: { start: 2218, end: 2226 } },
      directives: [],
      loc: { start: 2211, end: 2226 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'UUID', loc: { start: 2235, end: 2239 } },
      directives: [],
      loc: { start: 2228, end: 2239 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'JSON', loc: { start: 2248, end: 2252 } },
      directives: [],
      loc: { start: 2241, end: 2252 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 2265, end: 2270 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'folderById', loc: { start: 2275, end: 2285 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'id', loc: { start: 2286, end: 2288 } },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'ID', loc: { start: 2290, end: 2292 } },
                  loc: { start: 2290, end: 2292 },
                },
                loc: { start: 2290, end: 2293 },
              },
              directives: [],
              loc: { start: 2286, end: 2293 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Folder', loc: { start: 2296, end: 2302 } },
            loc: { start: 2296, end: 2302 },
          },
          directives: [],
          loc: { start: 2275, end: 2302 },
        },
      ],
      loc: { start: 2253, end: 2304 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 2318, end: 2326 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createFolder', loc: { start: 2331, end: 2343 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'input', loc: { start: 2344, end: 2349 } },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'CreateFolderInput',
                    loc: { start: 2351, end: 2368 },
                  },
                  loc: { start: 2351, end: 2368 },
                },
                loc: { start: 2351, end: 2369 },
              },
              directives: [],
              loc: { start: 2344, end: 2369 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Folder', loc: { start: 2372, end: 2378 } },
            loc: { start: 2372, end: 2378 },
          },
          directives: [],
          loc: { start: 2331, end: 2378 },
        },
      ],
      loc: { start: 2306, end: 2380 },
    },
    {
      kind: 'ObjectTypeDefinition',
      description: {
        kind: 'StringValue',
        value:
          'A folder is the core unit of organization in the asset library.\nFolders can contain other folders and assets.',
        block: true,
        loc: { start: 2382, end: 2503 },
      },
      name: { kind: 'Name', value: 'Folder', loc: { start: 2509, end: 2515 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 2520, end: 2522 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 2524, end: 2526 } },
              loc: { start: 2524, end: 2526 },
            },
            loc: { start: 2524, end: 2527 },
          },
          directives: [],
          loc: { start: 2520, end: 2527 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createdAt', loc: { start: 2530, end: 2539 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 2541, end: 2549 } },
              loc: { start: 2541, end: 2549 },
            },
            loc: { start: 2541, end: 2550 },
          },
          directives: [],
          loc: { start: 2530, end: 2550 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'updatedAt', loc: { start: 2553, end: 2562 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 2564, end: 2572 } },
              loc: { start: 2564, end: 2572 },
            },
            loc: { start: 2564, end: 2573 },
          },
          directives: [],
          loc: { start: 2553, end: 2573 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value: 'A human readable name for the folder.',
            block: true,
            loc: { start: 2576, end: 2627 },
          },
          name: { kind: 'Name', value: 'name', loc: { start: 2630, end: 2634 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 2636, end: 2642 } },
              loc: { start: 2636, end: 2642 },
            },
            loc: { start: 2636, end: 2643 },
          },
          directives: [],
          loc: { start: 2576, end: 2643 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value:
              'The path of the folder, relative to the root folder.\nAll paths begin with a slash.',
            block: true,
            loc: { start: 2646, end: 2746 },
          },
          name: { kind: 'Name', value: 'path', loc: { start: 2749, end: 2753 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 2755, end: 2761 } },
              loc: { start: 2755, end: 2761 },
            },
            loc: { start: 2755, end: 2762 },
          },
          directives: [],
          loc: { start: 2646, end: 2762 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'parent', loc: { start: 2765, end: 2771 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Folder', loc: { start: 2773, end: 2779 } },
            loc: { start: 2773, end: 2779 },
          },
          directives: [],
          loc: { start: 2765, end: 2779 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'children', loc: { start: 2782, end: 2790 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'Folder', loc: { start: 2793, end: 2799 } },
                  loc: { start: 2793, end: 2799 },
                },
                loc: { start: 2793, end: 2800 },
              },
              loc: { start: 2792, end: 2801 },
            },
            loc: { start: 2792, end: 2802 },
          },
          directives: [],
          loc: { start: 2782, end: 2802 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value:
              "Useful for when you want to display a folder's contents in a tree view.\nNOTE: The asset type is an interface and will not reveal details of the underling asset type",
            block: true,
            loc: { start: 2805, end: 2987 },
          },
          name: { kind: 'Name', value: 'assets', loc: { start: 2990, end: 2996 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'assetType', loc: { start: 2997, end: 3006 } },
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'AssetType', loc: { start: 3008, end: 3017 } },
                loc: { start: 3008, end: 3017 },
              },
              directives: [],
              loc: { start: 2997, end: 3017 },
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
                  name: { kind: 'Name', value: 'Asset', loc: { start: 3021, end: 3026 } },
                  loc: { start: 3021, end: 3026 },
                },
                loc: { start: 3021, end: 3027 },
              },
              loc: { start: 3020, end: 3028 },
            },
            loc: { start: 3020, end: 3029 },
          },
          directives: [],
          loc: { start: 2805, end: 3029 },
        },
      ],
      loc: { start: 2382, end: 3031 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: { kind: 'Name', value: 'CreateFolderInput', loc: { start: 3039, end: 3056 } },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'parentId', loc: { start: 3061, end: 3069 } },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ID', loc: { start: 3071, end: 3073 } },
            loc: { start: 3071, end: 3073 },
          },
          directives: [],
          loc: { start: 3061, end: 3073 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 3076, end: 3080 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 3082, end: 3088 } },
              loc: { start: 3082, end: 3088 },
            },
            loc: { start: 3082, end: 3089 },
          },
          directives: [],
          loc: { start: 3076, end: 3089 },
        },
      ],
      loc: { start: 3033, end: 3091 },
    },
  ],
  loc: { start: 0, end: 3092 },
} as unknown as DocumentNode;
