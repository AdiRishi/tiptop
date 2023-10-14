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
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 785, end: 799 } },
              loc: { start: 785, end: 799 },
            },
            loc: { start: 785, end: 800 },
          },
          directives: [],
          loc: { start: 772, end: 800 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'isLatest', loc: { start: 803, end: 811 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean', loc: { start: 813, end: 820 } },
              loc: { start: 813, end: 820 },
            },
            loc: { start: 813, end: 821 },
          },
          directives: [],
          loc: { start: 803, end: 821 },
        },
      ],
      loc: { start: 51, end: 823 },
    },
    {
      kind: 'EnumTypeDefinition',
      name: { kind: 'Name', value: 'AssetType', loc: { start: 830, end: 839 } },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'RICH_TEXT', loc: { start: 844, end: 853 } },
          directives: [],
          loc: { start: 844, end: 853 },
        },
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'VIDEO', loc: { start: 856, end: 861 } },
          directives: [],
          loc: { start: 856, end: 861 },
        },
      ],
      loc: { start: 825, end: 863 },
    },
    {
      kind: 'ObjectTypeDefinition',
      description: {
        kind: 'StringValue',
        value:
          'Every asset can have "data" fields stored alongside it.\nMetafields can have multiple different types, e.g string, json, date, etc.\n- Each type must be serializable to a string\n- Metafields are queriable with high perforamnce (indexed)',
        block: true,
        loc: { start: 865, end: 1115 },
      },
      name: { kind: 'Name', value: 'MetaField', loc: { start: 1121, end: 1130 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1135, end: 1137 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 1139, end: 1141 } },
              loc: { start: 1139, end: 1141 },
            },
            loc: { start: 1139, end: 1142 },
          },
          directives: [],
          loc: { start: 1135, end: 1142 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'key', loc: { start: 1145, end: 1148 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 1150, end: 1164 } },
              loc: { start: 1150, end: 1164 },
            },
            loc: { start: 1150, end: 1165 },
          },
          directives: [],
          loc: { start: 1145, end: 1165 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'valueType', loc: { start: 1168, end: 1177 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'MetaFieldValueType', loc: { start: 1179, end: 1197 } },
              loc: { start: 1179, end: 1197 },
            },
            loc: { start: 1179, end: 1198 },
          },
          directives: [],
          loc: { start: 1168, end: 1198 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'value', loc: { start: 1201, end: 1206 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 1208, end: 1222 } },
            loc: { start: 1208, end: 1222 },
          },
          directives: [],
          loc: { start: 1201, end: 1222 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'asset', loc: { start: 1225, end: 1230 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Asset', loc: { start: 1232, end: 1237 } },
              loc: { start: 1232, end: 1237 },
            },
            loc: { start: 1232, end: 1238 },
          },
          directives: [],
          loc: { start: 1225, end: 1238 },
        },
      ],
      loc: { start: 865, end: 1240 },
    },
    {
      kind: 'EnumTypeDefinition',
      name: { kind: 'Name', value: 'MetaFieldValueType', loc: { start: 1247, end: 1265 } },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'TEXT', loc: { start: 1270, end: 1274 } },
          directives: [],
          loc: { start: 1270, end: 1274 },
        },
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'DATE', loc: { start: 1277, end: 1281 } },
          directives: [],
          loc: { start: 1277, end: 1281 },
        },
      ],
      loc: { start: 1242, end: 1283 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'VideoAsset', loc: { start: 1290, end: 1300 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Asset', loc: { start: 1312, end: 1317 } },
          loc: { start: 1312, end: 1317 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1322, end: 1324 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 1326, end: 1328 } },
              loc: { start: 1326, end: 1328 },
            },
            loc: { start: 1326, end: 1329 },
          },
          directives: [],
          loc: { start: 1322, end: 1329 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createdAt', loc: { start: 1332, end: 1341 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 1343, end: 1351 } },
              loc: { start: 1343, end: 1351 },
            },
            loc: { start: 1343, end: 1352 },
          },
          directives: [],
          loc: { start: 1332, end: 1352 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'updatedAt', loc: { start: 1355, end: 1364 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 1366, end: 1374 } },
              loc: { start: 1366, end: 1374 },
            },
            loc: { start: 1366, end: 1375 },
          },
          directives: [],
          loc: { start: 1355, end: 1375 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'deletedAt', loc: { start: 1378, end: 1387 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'DateTime', loc: { start: 1389, end: 1397 } },
            loc: { start: 1389, end: 1397 },
          },
          directives: [],
          loc: { start: 1378, end: 1397 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'guid', loc: { start: 1400, end: 1404 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UUID', loc: { start: 1406, end: 1410 } },
              loc: { start: 1406, end: 1410 },
            },
            loc: { start: 1406, end: 1411 },
          },
          directives: [],
          loc: { start: 1400, end: 1411 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'folder', loc: { start: 1414, end: 1420 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Folder', loc: { start: 1422, end: 1428 } },
              loc: { start: 1422, end: 1428 },
            },
            loc: { start: 1422, end: 1429 },
          },
          directives: [],
          loc: { start: 1414, end: 1429 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'type', loc: { start: 1432, end: 1436 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AssetType', loc: { start: 1438, end: 1447 } },
              loc: { start: 1438, end: 1447 },
            },
            loc: { start: 1438, end: 1448 },
          },
          directives: [],
          loc: { start: 1432, end: 1448 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'metafields', loc: { start: 1451, end: 1461 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'MetaField', loc: { start: 1464, end: 1473 } },
                  loc: { start: 1464, end: 1473 },
                },
                loc: { start: 1464, end: 1474 },
              },
              loc: { start: 1463, end: 1475 },
            },
            loc: { start: 1463, end: 1476 },
          },
          directives: [],
          loc: { start: 1451, end: 1476 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'versionSlug', loc: { start: 1479, end: 1490 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 1492, end: 1506 } },
              loc: { start: 1492, end: 1506 },
            },
            loc: { start: 1492, end: 1507 },
          },
          directives: [],
          loc: { start: 1479, end: 1507 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'isLatest', loc: { start: 1510, end: 1518 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean', loc: { start: 1520, end: 1527 } },
              loc: { start: 1520, end: 1527 },
            },
            loc: { start: 1520, end: 1528 },
          },
          directives: [],
          loc: { start: 1510, end: 1528 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'cfData', loc: { start: 1531, end: 1537 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CfVideoData', loc: { start: 1539, end: 1550 } },
              loc: { start: 1539, end: 1550 },
            },
            loc: { start: 1539, end: 1551 },
          },
          directives: [],
          loc: { start: 1531, end: 1551 },
        },
      ],
      loc: { start: 1285, end: 1553 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'CfVideoData', loc: { start: 1560, end: 1571 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'uid', loc: { start: 1576, end: 1579 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 1581, end: 1583 } },
              loc: { start: 1581, end: 1583 },
            },
            loc: { start: 1581, end: 1584 },
          },
          directives: [],
          loc: { start: 1576, end: 1584 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'allowedOrigins', loc: { start: 1587, end: 1601 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 1604, end: 1618 } },
                  loc: { start: 1604, end: 1618 },
                },
                loc: { start: 1604, end: 1619 },
              },
              loc: { start: 1603, end: 1620 },
            },
            loc: { start: 1603, end: 1621 },
          },
          directives: [],
          loc: { start: 1587, end: 1621 },
        },
      ],
      loc: { start: 1555, end: 1623 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'RichTextAsset', loc: { start: 1630, end: 1643 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Asset', loc: { start: 1655, end: 1660 } },
          loc: { start: 1655, end: 1660 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1665, end: 1667 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 1669, end: 1671 } },
              loc: { start: 1669, end: 1671 },
            },
            loc: { start: 1669, end: 1672 },
          },
          directives: [],
          loc: { start: 1665, end: 1672 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createdAt', loc: { start: 1675, end: 1684 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 1686, end: 1694 } },
              loc: { start: 1686, end: 1694 },
            },
            loc: { start: 1686, end: 1695 },
          },
          directives: [],
          loc: { start: 1675, end: 1695 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'updatedAt', loc: { start: 1698, end: 1707 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 1709, end: 1717 } },
              loc: { start: 1709, end: 1717 },
            },
            loc: { start: 1709, end: 1718 },
          },
          directives: [],
          loc: { start: 1698, end: 1718 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'deletedAt', loc: { start: 1721, end: 1730 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'DateTime', loc: { start: 1732, end: 1740 } },
            loc: { start: 1732, end: 1740 },
          },
          directives: [],
          loc: { start: 1721, end: 1740 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'guid', loc: { start: 1743, end: 1747 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UUID', loc: { start: 1749, end: 1753 } },
              loc: { start: 1749, end: 1753 },
            },
            loc: { start: 1749, end: 1754 },
          },
          directives: [],
          loc: { start: 1743, end: 1754 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'folder', loc: { start: 1757, end: 1763 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Folder', loc: { start: 1765, end: 1771 } },
              loc: { start: 1765, end: 1771 },
            },
            loc: { start: 1765, end: 1772 },
          },
          directives: [],
          loc: { start: 1757, end: 1772 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'type', loc: { start: 1775, end: 1779 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AssetType', loc: { start: 1781, end: 1790 } },
              loc: { start: 1781, end: 1790 },
            },
            loc: { start: 1781, end: 1791 },
          },
          directives: [],
          loc: { start: 1775, end: 1791 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'metafields', loc: { start: 1794, end: 1804 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'MetaField', loc: { start: 1807, end: 1816 } },
                  loc: { start: 1807, end: 1816 },
                },
                loc: { start: 1807, end: 1817 },
              },
              loc: { start: 1806, end: 1818 },
            },
            loc: { start: 1806, end: 1819 },
          },
          directives: [],
          loc: { start: 1794, end: 1819 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'versionSlug', loc: { start: 1822, end: 1833 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 1835, end: 1849 } },
              loc: { start: 1835, end: 1849 },
            },
            loc: { start: 1835, end: 1850 },
          },
          directives: [],
          loc: { start: 1822, end: 1850 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'isLatest', loc: { start: 1853, end: 1861 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean', loc: { start: 1863, end: 1870 } },
              loc: { start: 1863, end: 1870 },
            },
            loc: { start: 1863, end: 1871 },
          },
          directives: [],
          loc: { start: 1853, end: 1871 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value:
              'The name of the editor used to create this asset\nCan be used to interpret the format of JSON in contentJson',
            block: true,
            loc: { start: 1874, end: 1999 },
          },
          name: { kind: 'Name', value: 'editorName', loc: { start: 2002, end: 2012 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 2014, end: 2028 } },
              loc: { start: 2014, end: 2028 },
            },
            loc: { start: 2014, end: 2029 },
          },
          directives: [],
          loc: { start: 1874, end: 2029 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value:
              'The JSON representation of the editor state\nEditors serialize their content differently.\nRefer to editorName to find out what editor was used to create this JSON.',
            block: true,
            loc: { start: 2032, end: 2216 },
          },
          name: { kind: 'Name', value: 'contentJson', loc: { start: 2219, end: 2230 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'JSON', loc: { start: 2232, end: 2236 } },
              loc: { start: 2232, end: 2236 },
            },
            loc: { start: 2232, end: 2237 },
          },
          directives: [],
          loc: { start: 2032, end: 2237 },
        },
      ],
      loc: { start: 1625, end: 2239 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Query', loc: { start: 2245, end: 2250 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 2240, end: 2250 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 2257, end: 2265 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 2252, end: 2265 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'DateTime', loc: { start: 2274, end: 2282 } },
      directives: [],
      loc: { start: 2267, end: 2282 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'UUID', loc: { start: 2291, end: 2295 } },
      directives: [],
      loc: { start: 2284, end: 2295 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'JSON', loc: { start: 2304, end: 2308 } },
      directives: [],
      loc: { start: 2297, end: 2308 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 2317, end: 2331 } },
      directives: [],
      loc: { start: 2310, end: 2331 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 2344, end: 2349 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'folderById', loc: { start: 2354, end: 2364 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'id', loc: { start: 2365, end: 2367 } },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'ID', loc: { start: 2369, end: 2371 } },
                  loc: { start: 2369, end: 2371 },
                },
                loc: { start: 2369, end: 2372 },
              },
              directives: [],
              loc: { start: 2365, end: 2372 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Folder', loc: { start: 2375, end: 2381 } },
            loc: { start: 2375, end: 2381 },
          },
          directives: [],
          loc: { start: 2354, end: 2381 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'folderByPath', loc: { start: 2384, end: 2396 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'path', loc: { start: 2397, end: 2401 } },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 2403, end: 2417 } },
                  loc: { start: 2403, end: 2417 },
                },
                loc: { start: 2403, end: 2418 },
              },
              directives: [],
              loc: { start: 2397, end: 2418 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Folder', loc: { start: 2421, end: 2427 } },
            loc: { start: 2421, end: 2427 },
          },
          directives: [],
          loc: { start: 2384, end: 2427 },
        },
      ],
      loc: { start: 2332, end: 2429 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 2443, end: 2451 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createFolder', loc: { start: 2456, end: 2468 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'input', loc: { start: 2469, end: 2474 } },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'CreateFolderInput',
                    loc: { start: 2476, end: 2493 },
                  },
                  loc: { start: 2476, end: 2493 },
                },
                loc: { start: 2476, end: 2494 },
              },
              directives: [],
              loc: { start: 2469, end: 2494 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Folder', loc: { start: 2497, end: 2503 } },
            loc: { start: 2497, end: 2503 },
          },
          directives: [],
          loc: { start: 2456, end: 2503 },
        },
      ],
      loc: { start: 2431, end: 2505 },
    },
    {
      kind: 'ObjectTypeDefinition',
      description: {
        kind: 'StringValue',
        value:
          'A folder is the core unit of organization in the asset library.\nFolders can contain other folders and assets.',
        block: true,
        loc: { start: 2507, end: 2628 },
      },
      name: { kind: 'Name', value: 'Folder', loc: { start: 2634, end: 2640 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 2645, end: 2647 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 2649, end: 2651 } },
              loc: { start: 2649, end: 2651 },
            },
            loc: { start: 2649, end: 2652 },
          },
          directives: [],
          loc: { start: 2645, end: 2652 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createdAt', loc: { start: 2655, end: 2664 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 2666, end: 2674 } },
              loc: { start: 2666, end: 2674 },
            },
            loc: { start: 2666, end: 2675 },
          },
          directives: [],
          loc: { start: 2655, end: 2675 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'updatedAt', loc: { start: 2678, end: 2687 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 2689, end: 2697 } },
              loc: { start: 2689, end: 2697 },
            },
            loc: { start: 2689, end: 2698 },
          },
          directives: [],
          loc: { start: 2678, end: 2698 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value: 'A human readable name for the folder.',
            block: true,
            loc: { start: 2701, end: 2752 },
          },
          name: { kind: 'Name', value: 'name', loc: { start: 2755, end: 2759 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 2761, end: 2775 } },
              loc: { start: 2761, end: 2775 },
            },
            loc: { start: 2761, end: 2776 },
          },
          directives: [],
          loc: { start: 2701, end: 2776 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value:
              'The path of the folder, relative to the root folder.\nAll paths begin with a slash.',
            block: true,
            loc: { start: 2779, end: 2879 },
          },
          name: { kind: 'Name', value: 'path', loc: { start: 2882, end: 2886 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 2888, end: 2902 } },
              loc: { start: 2888, end: 2902 },
            },
            loc: { start: 2888, end: 2903 },
          },
          directives: [],
          loc: { start: 2779, end: 2903 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'parent', loc: { start: 2906, end: 2912 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Folder', loc: { start: 2914, end: 2920 } },
            loc: { start: 2914, end: 2920 },
          },
          directives: [],
          loc: { start: 2906, end: 2920 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value: 'Direct children of the folder.',
            block: true,
            loc: { start: 2923, end: 2967 },
          },
          name: { kind: 'Name', value: 'children', loc: { start: 2970, end: 2978 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'Folder', loc: { start: 2981, end: 2987 } },
                  loc: { start: 2981, end: 2987 },
                },
                loc: { start: 2981, end: 2988 },
              },
              loc: { start: 2980, end: 2989 },
            },
            loc: { start: 2980, end: 2990 },
          },
          directives: [],
          loc: { start: 2923, end: 2990 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value:
              "Useful for when you want to display a folder's contents in a tree view.\nNOTE: The asset type is an interface and will not reveal details of the underling asset type",
            block: true,
            loc: { start: 2993, end: 3175 },
          },
          name: { kind: 'Name', value: 'assets', loc: { start: 3178, end: 3184 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'assetType', loc: { start: 3185, end: 3194 } },
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'AssetType', loc: { start: 3196, end: 3205 } },
                loc: { start: 3196, end: 3205 },
              },
              directives: [],
              loc: { start: 3185, end: 3205 },
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
                  name: { kind: 'Name', value: 'Asset', loc: { start: 3209, end: 3214 } },
                  loc: { start: 3209, end: 3214 },
                },
                loc: { start: 3209, end: 3215 },
              },
              loc: { start: 3208, end: 3216 },
            },
            loc: { start: 3208, end: 3217 },
          },
          directives: [],
          loc: { start: 2993, end: 3217 },
        },
      ],
      loc: { start: 2507, end: 3219 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: { kind: 'Name', value: 'CreateFolderInput', loc: { start: 3227, end: 3244 } },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          description: {
            kind: 'StringValue',
            value:
              'The parent folder\'s path.\nIf you want to create a folder at the root level, use "/".',
            block: true,
            loc: { start: 3249, end: 3351 },
          },
          name: { kind: 'Name', value: 'parentPath', loc: { start: 3354, end: 3364 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 3366, end: 3380 } },
              loc: { start: 3366, end: 3380 },
            },
            loc: { start: 3366, end: 3381 },
          },
          directives: [],
          loc: { start: 3249, end: 3381 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 3384, end: 3388 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'NonEmptyString', loc: { start: 3390, end: 3404 } },
              loc: { start: 3390, end: 3404 },
            },
            loc: { start: 3390, end: 3405 },
          },
          directives: [],
          loc: { start: 3384, end: 3405 },
        },
      ],
      loc: { start: 3221, end: 3407 },
    },
  ],
  loc: { start: 0, end: 3408 },
} as unknown as DocumentNode;
