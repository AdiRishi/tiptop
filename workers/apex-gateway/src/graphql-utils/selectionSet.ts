import { GraphQLResolveInfo, Kind } from 'graphql';

export function isFieldNamePresent(fieldName: string, info: GraphQLResolveInfo): boolean {
  return info.fieldNodes.some((fieldNode) => {
    return fieldNode.selectionSet?.selections.some((selection) => {
      return selection.kind === Kind.FIELD && selection.name.value === fieldName;
    });
  });
}
