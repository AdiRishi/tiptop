import { PlopTypes } from '@turbo/gen';
import path from 'path';

export function getRelativePath(source: string, target: string): string {
  return path.relative(source, target);
}

export function addCustomHelpers(plop: PlopTypes.NodePlopAPI) {
  void plop;
  plop.setHelper('getRelativePath', getRelativePath);
  plop.setHelper('raw-helper', (options) => options.fn());
}
