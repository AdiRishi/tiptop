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
      name: { kind: 'Name', value: 'Asset', loc: { start: 61, end: 66 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 71, end: 73 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 75, end: 77 } },
              loc: { start: 75, end: 77 },
            },
            loc: { start: 75, end: 78 },
          },
          directives: [],
          loc: { start: 71, end: 78 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createdAt', loc: { start: 81, end: 90 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 92, end: 100 } },
              loc: { start: 92, end: 100 },
            },
            loc: { start: 92, end: 101 },
          },
          directives: [],
          loc: { start: 81, end: 101 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'updatedAt', loc: { start: 104, end: 113 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 115, end: 123 } },
              loc: { start: 115, end: 123 },
            },
            loc: { start: 115, end: 124 },
          },
          directives: [],
          loc: { start: 104, end: 124 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'deletedAt', loc: { start: 127, end: 136 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'DateTime', loc: { start: 138, end: 146 } },
            loc: { start: 138, end: 146 },
          },
          directives: [],
          loc: { start: 127, end: 146 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'guid', loc: { start: 149, end: 153 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UUID', loc: { start: 155, end: 159 } },
              loc: { start: 155, end: 159 },
            },
            loc: { start: 155, end: 160 },
          },
          directives: [],
          loc: { start: 149, end: 160 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'folder', loc: { start: 163, end: 169 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Folder', loc: { start: 171, end: 177 } },
              loc: { start: 171, end: 177 },
            },
            loc: { start: 171, end: 178 },
          },
          directives: [],
          loc: { start: 163, end: 178 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'type', loc: { start: 181, end: 185 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AssetType', loc: { start: 187, end: 196 } },
              loc: { start: 187, end: 196 },
            },
            loc: { start: 187, end: 197 },
          },
          directives: [],
          loc: { start: 181, end: 197 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'metafields', loc: { start: 200, end: 210 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'MetaField', loc: { start: 213, end: 222 } },
                  loc: { start: 213, end: 222 },
                },
                loc: { start: 213, end: 223 },
              },
              loc: { start: 212, end: 224 },
            },
            loc: { start: 212, end: 225 },
          },
          directives: [],
          loc: { start: 200, end: 225 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'versionSlug', loc: { start: 228, end: 239 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 241, end: 247 } },
              loc: { start: 241, end: 247 },
            },
            loc: { start: 241, end: 248 },
          },
          directives: [],
          loc: { start: 228, end: 248 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'isLatest', loc: { start: 251, end: 259 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean', loc: { start: 261, end: 268 } },
              loc: { start: 261, end: 268 },
            },
            loc: { start: 261, end: 269 },
          },
          directives: [],
          loc: { start: 251, end: 269 },
        },
      ],
      loc: { start: 51, end: 271 },
    },
    {
      kind: 'EnumTypeDefinition',
      name: { kind: 'Name', value: 'AssetType', loc: { start: 278, end: 287 } },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'RICH_TEXT', loc: { start: 292, end: 301 } },
          directives: [],
          loc: { start: 292, end: 301 },
        },
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'VIDEO', loc: { start: 304, end: 309 } },
          directives: [],
          loc: { start: 304, end: 309 },
        },
      ],
      loc: { start: 273, end: 311 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'MetaField', loc: { start: 318, end: 327 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 332, end: 334 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 336, end: 338 } },
              loc: { start: 336, end: 338 },
            },
            loc: { start: 336, end: 339 },
          },
          directives: [],
          loc: { start: 332, end: 339 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'key', loc: { start: 342, end: 345 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 347, end: 353 } },
              loc: { start: 347, end: 353 },
            },
            loc: { start: 347, end: 354 },
          },
          directives: [],
          loc: { start: 342, end: 354 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'valueType', loc: { start: 357, end: 366 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'MetaFieldValueType', loc: { start: 368, end: 386 } },
              loc: { start: 368, end: 386 },
            },
            loc: { start: 368, end: 387 },
          },
          directives: [],
          loc: { start: 357, end: 387 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'value', loc: { start: 390, end: 395 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'String', loc: { start: 397, end: 403 } },
            loc: { start: 397, end: 403 },
          },
          directives: [],
          loc: { start: 390, end: 403 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'asset', loc: { start: 406, end: 411 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Asset', loc: { start: 413, end: 418 } },
              loc: { start: 413, end: 418 },
            },
            loc: { start: 413, end: 419 },
          },
          directives: [],
          loc: { start: 406, end: 419 },
        },
      ],
      loc: { start: 313, end: 421 },
    },
    {
      kind: 'EnumTypeDefinition',
      name: { kind: 'Name', value: 'MetaFieldValueType', loc: { start: 428, end: 446 } },
      directives: [],
      values: [
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'TEXT', loc: { start: 451, end: 455 } },
          directives: [],
          loc: { start: 451, end: 455 },
        },
        {
          kind: 'EnumValueDefinition',
          name: { kind: 'Name', value: 'DATE', loc: { start: 458, end: 462 } },
          directives: [],
          loc: { start: 458, end: 462 },
        },
      ],
      loc: { start: 423, end: 464 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'VideoAsset', loc: { start: 471, end: 481 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Asset', loc: { start: 493, end: 498 } },
          loc: { start: 493, end: 498 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 503, end: 505 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 507, end: 509 } },
              loc: { start: 507, end: 509 },
            },
            loc: { start: 507, end: 510 },
          },
          directives: [],
          loc: { start: 503, end: 510 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createdAt', loc: { start: 513, end: 522 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 524, end: 532 } },
              loc: { start: 524, end: 532 },
            },
            loc: { start: 524, end: 533 },
          },
          directives: [],
          loc: { start: 513, end: 533 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'updatedAt', loc: { start: 536, end: 545 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 547, end: 555 } },
              loc: { start: 547, end: 555 },
            },
            loc: { start: 547, end: 556 },
          },
          directives: [],
          loc: { start: 536, end: 556 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'deletedAt', loc: { start: 559, end: 568 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'DateTime', loc: { start: 570, end: 578 } },
            loc: { start: 570, end: 578 },
          },
          directives: [],
          loc: { start: 559, end: 578 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'guid', loc: { start: 581, end: 585 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UUID', loc: { start: 587, end: 591 } },
              loc: { start: 587, end: 591 },
            },
            loc: { start: 587, end: 592 },
          },
          directives: [],
          loc: { start: 581, end: 592 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'folder', loc: { start: 595, end: 601 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Folder', loc: { start: 603, end: 609 } },
              loc: { start: 603, end: 609 },
            },
            loc: { start: 603, end: 610 },
          },
          directives: [],
          loc: { start: 595, end: 610 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'type', loc: { start: 613, end: 617 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AssetType', loc: { start: 619, end: 628 } },
              loc: { start: 619, end: 628 },
            },
            loc: { start: 619, end: 629 },
          },
          directives: [],
          loc: { start: 613, end: 629 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'metafields', loc: { start: 632, end: 642 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'MetaField', loc: { start: 645, end: 654 } },
                  loc: { start: 645, end: 654 },
                },
                loc: { start: 645, end: 655 },
              },
              loc: { start: 644, end: 656 },
            },
            loc: { start: 644, end: 657 },
          },
          directives: [],
          loc: { start: 632, end: 657 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'versionSlug', loc: { start: 660, end: 671 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 673, end: 679 } },
              loc: { start: 673, end: 679 },
            },
            loc: { start: 673, end: 680 },
          },
          directives: [],
          loc: { start: 660, end: 680 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'isLatest', loc: { start: 683, end: 691 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean', loc: { start: 693, end: 700 } },
              loc: { start: 693, end: 700 },
            },
            loc: { start: 693, end: 701 },
          },
          directives: [],
          loc: { start: 683, end: 701 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'cfData', loc: { start: 704, end: 710 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CfVideoData', loc: { start: 712, end: 723 } },
              loc: { start: 712, end: 723 },
            },
            loc: { start: 712, end: 724 },
          },
          directives: [],
          loc: { start: 704, end: 724 },
        },
      ],
      loc: { start: 466, end: 726 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'CfVideoData', loc: { start: 733, end: 744 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'uid', loc: { start: 749, end: 752 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 754, end: 756 } },
              loc: { start: 754, end: 756 },
            },
            loc: { start: 754, end: 757 },
          },
          directives: [],
          loc: { start: 749, end: 757 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'allowedOrigins', loc: { start: 760, end: 774 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'String', loc: { start: 777, end: 783 } },
                  loc: { start: 777, end: 783 },
                },
                loc: { start: 777, end: 784 },
              },
              loc: { start: 776, end: 785 },
            },
            loc: { start: 776, end: 786 },
          },
          directives: [],
          loc: { start: 760, end: 786 },
        },
      ],
      loc: { start: 728, end: 788 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'RichTextAsset', loc: { start: 795, end: 808 } },
      interfaces: [
        {
          kind: 'NamedType',
          name: { kind: 'Name', value: 'Asset', loc: { start: 820, end: 825 } },
          loc: { start: 820, end: 825 },
        },
      ],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 830, end: 832 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 834, end: 836 } },
              loc: { start: 834, end: 836 },
            },
            loc: { start: 834, end: 837 },
          },
          directives: [],
          loc: { start: 830, end: 837 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createdAt', loc: { start: 840, end: 849 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 851, end: 859 } },
              loc: { start: 851, end: 859 },
            },
            loc: { start: 851, end: 860 },
          },
          directives: [],
          loc: { start: 840, end: 860 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'updatedAt', loc: { start: 863, end: 872 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 874, end: 882 } },
              loc: { start: 874, end: 882 },
            },
            loc: { start: 874, end: 883 },
          },
          directives: [],
          loc: { start: 863, end: 883 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'deletedAt', loc: { start: 886, end: 895 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'DateTime', loc: { start: 897, end: 905 } },
            loc: { start: 897, end: 905 },
          },
          directives: [],
          loc: { start: 886, end: 905 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'guid', loc: { start: 908, end: 912 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UUID', loc: { start: 914, end: 918 } },
              loc: { start: 914, end: 918 },
            },
            loc: { start: 914, end: 919 },
          },
          directives: [],
          loc: { start: 908, end: 919 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'folder', loc: { start: 922, end: 928 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Folder', loc: { start: 930, end: 936 } },
              loc: { start: 930, end: 936 },
            },
            loc: { start: 930, end: 937 },
          },
          directives: [],
          loc: { start: 922, end: 937 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'type', loc: { start: 940, end: 944 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AssetType', loc: { start: 946, end: 955 } },
              loc: { start: 946, end: 955 },
            },
            loc: { start: 946, end: 956 },
          },
          directives: [],
          loc: { start: 940, end: 956 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'metafields', loc: { start: 959, end: 969 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'MetaField', loc: { start: 972, end: 981 } },
                  loc: { start: 972, end: 981 },
                },
                loc: { start: 972, end: 982 },
              },
              loc: { start: 971, end: 983 },
            },
            loc: { start: 971, end: 984 },
          },
          directives: [],
          loc: { start: 959, end: 984 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'versionSlug', loc: { start: 987, end: 998 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 1000, end: 1006 } },
              loc: { start: 1000, end: 1006 },
            },
            loc: { start: 1000, end: 1007 },
          },
          directives: [],
          loc: { start: 987, end: 1007 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'isLatest', loc: { start: 1010, end: 1018 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean', loc: { start: 1020, end: 1027 } },
              loc: { start: 1020, end: 1027 },
            },
            loc: { start: 1020, end: 1028 },
          },
          directives: [],
          loc: { start: 1010, end: 1028 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value:
              'The name of the editor used to create this asset\nCan be used to interpret the format of JSON in contentJson',
            block: true,
            loc: { start: 1031, end: 1156 },
          },
          name: { kind: 'Name', value: 'editorName', loc: { start: 1159, end: 1169 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 1171, end: 1177 } },
              loc: { start: 1171, end: 1177 },
            },
            loc: { start: 1171, end: 1178 },
          },
          directives: [],
          loc: { start: 1031, end: 1178 },
        },
        {
          kind: 'FieldDefinition',
          description: {
            kind: 'StringValue',
            value:
              'The JSON representation of the editor state\nEditors serialize their content differently.\nRefer to editorName to find out what editor was used to create this JSON.',
            block: true,
            loc: { start: 1181, end: 1365 },
          },
          name: { kind: 'Name', value: 'contentJson', loc: { start: 1368, end: 1379 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'JSON', loc: { start: 1381, end: 1385 } },
              loc: { start: 1381, end: 1385 },
            },
            loc: { start: 1381, end: 1386 },
          },
          directives: [],
          loc: { start: 1181, end: 1386 },
        },
      ],
      loc: { start: 790, end: 1388 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Query', loc: { start: 1394, end: 1399 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 1389, end: 1399 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 1406, end: 1414 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 1401, end: 1414 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'DateTime', loc: { start: 1423, end: 1431 } },
      directives: [],
      loc: { start: 1416, end: 1431 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'UUID', loc: { start: 1440, end: 1444 } },
      directives: [],
      loc: { start: 1433, end: 1444 },
    },
    {
      kind: 'ScalarTypeDefinition',
      name: { kind: 'Name', value: 'JSON', loc: { start: 1453, end: 1457 } },
      directives: [],
      loc: { start: 1446, end: 1457 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Query', loc: { start: 1470, end: 1475 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'folderById', loc: { start: 1480, end: 1490 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'id', loc: { start: 1491, end: 1493 } },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'ID', loc: { start: 1495, end: 1497 } },
                  loc: { start: 1495, end: 1497 },
                },
                loc: { start: 1495, end: 1498 },
              },
              directives: [],
              loc: { start: 1491, end: 1498 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Folder', loc: { start: 1501, end: 1507 } },
            loc: { start: 1501, end: 1507 },
          },
          directives: [],
          loc: { start: 1480, end: 1507 },
        },
      ],
      loc: { start: 1458, end: 1509 },
    },
    {
      kind: 'ObjectTypeExtension',
      name: { kind: 'Name', value: 'Mutation', loc: { start: 1523, end: 1531 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createFolder', loc: { start: 1536, end: 1548 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'input', loc: { start: 1549, end: 1554 } },
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'CreateFolderInput',
                    loc: { start: 1556, end: 1573 },
                  },
                  loc: { start: 1556, end: 1573 },
                },
                loc: { start: 1556, end: 1574 },
              },
              directives: [],
              loc: { start: 1549, end: 1574 },
            },
          ],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Folder', loc: { start: 1577, end: 1583 } },
            loc: { start: 1577, end: 1583 },
          },
          directives: [],
          loc: { start: 1536, end: 1583 },
        },
      ],
      loc: { start: 1511, end: 1585 },
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Folder', loc: { start: 1592, end: 1598 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id', loc: { start: 1603, end: 1605 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ID', loc: { start: 1607, end: 1609 } },
              loc: { start: 1607, end: 1609 },
            },
            loc: { start: 1607, end: 1610 },
          },
          directives: [],
          loc: { start: 1603, end: 1610 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createdAt', loc: { start: 1613, end: 1622 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 1624, end: 1632 } },
              loc: { start: 1624, end: 1632 },
            },
            loc: { start: 1624, end: 1633 },
          },
          directives: [],
          loc: { start: 1613, end: 1633 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'updatedAt', loc: { start: 1636, end: 1645 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateTime', loc: { start: 1647, end: 1655 } },
              loc: { start: 1647, end: 1655 },
            },
            loc: { start: 1647, end: 1656 },
          },
          directives: [],
          loc: { start: 1636, end: 1656 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 1659, end: 1663 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 1665, end: 1671 } },
              loc: { start: 1665, end: 1671 },
            },
            loc: { start: 1665, end: 1672 },
          },
          directives: [],
          loc: { start: 1659, end: 1672 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'path', loc: { start: 1675, end: 1679 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 1681, end: 1687 } },
              loc: { start: 1681, end: 1687 },
            },
            loc: { start: 1681, end: 1688 },
          },
          directives: [],
          loc: { start: 1675, end: 1688 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'parent', loc: { start: 1691, end: 1697 } },
          arguments: [],
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'Folder', loc: { start: 1699, end: 1705 } },
            loc: { start: 1699, end: 1705 },
          },
          directives: [],
          loc: { start: 1691, end: 1705 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'children', loc: { start: 1708, end: 1716 } },
          arguments: [],
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'Folder', loc: { start: 1719, end: 1725 } },
                  loc: { start: 1719, end: 1725 },
                },
                loc: { start: 1719, end: 1726 },
              },
              loc: { start: 1718, end: 1727 },
            },
            loc: { start: 1718, end: 1728 },
          },
          directives: [],
          loc: { start: 1708, end: 1728 },
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'assets', loc: { start: 1731, end: 1737 } },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'assetType', loc: { start: 1738, end: 1747 } },
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'AssetType', loc: { start: 1749, end: 1758 } },
                loc: { start: 1749, end: 1758 },
              },
              directives: [],
              loc: { start: 1738, end: 1758 },
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
                  name: { kind: 'Name', value: 'Asset', loc: { start: 1762, end: 1767 } },
                  loc: { start: 1762, end: 1767 },
                },
                loc: { start: 1762, end: 1768 },
              },
              loc: { start: 1761, end: 1769 },
            },
            loc: { start: 1761, end: 1770 },
          },
          directives: [],
          loc: { start: 1731, end: 1770 },
        },
      ],
      loc: { start: 1587, end: 1772 },
    },
    {
      kind: 'InputObjectTypeDefinition',
      name: { kind: 'Name', value: 'CreateFolderInput', loc: { start: 1780, end: 1797 } },
      directives: [],
      fields: [
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'parentId', loc: { start: 1802, end: 1810 } },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ID', loc: { start: 1812, end: 1814 } },
            loc: { start: 1812, end: 1814 },
          },
          directives: [],
          loc: { start: 1802, end: 1814 },
        },
        {
          kind: 'InputValueDefinition',
          name: { kind: 'Name', value: 'name', loc: { start: 1817, end: 1821 } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String', loc: { start: 1823, end: 1829 } },
              loc: { start: 1823, end: 1829 },
            },
            loc: { start: 1823, end: 1830 },
          },
          directives: [],
          loc: { start: 1817, end: 1830 },
        },
      ],
      loc: { start: 1774, end: 1832 },
    },
  ],
  loc: { start: 0, end: 1833 },
} as unknown as DocumentNode;
