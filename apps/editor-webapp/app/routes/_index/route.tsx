import type { MetaFunction } from '@remix-run/cloudflare';
import { Undo } from 'lucide-react';
import { Navbar } from '~/components/navbar';

export const meta: MetaFunction = () => {
  return [{ title: 'Tiptop' }, { name: 'description', content: 'Tiptop' }];
};

export default function Index() {
  return (
    <>
      <Navbar />
      <main className="flex">
        <div className="w-1/4 p-2">
          <div id="current-selection" className="flex justify-between">
            <div>
              <p>Studio</p>
              <p>The ultimate cms</p>
            </div>
            <div>
              <Undo />
            </div>
          </div>
          <div id="file-explorer">Files</div>
        </div>
        <div className="w-3/4">rightbar</div>
      </main>
    </>
  );
}
