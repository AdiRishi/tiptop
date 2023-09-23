import { PlopTypes } from '@turbo/gen';
import path from 'path';

export function getRelativePath(source: string, target: string): string {
  return path.relative(source, target);
}

export function addCustomHelpers(plop: PlopTypes.NodePlopAPI) {
  void plop;
  plop.setHelper('getRelativePath', getRelativePath);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
  plop.setHelper('raw-helper', (options) => options.fn());
}
