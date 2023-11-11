import type { MetaFunction } from '@remix-run/cloudflare';
import { Folder, Image as ImageIcon } from 'lucide-react';

export const meta: MetaFunction = () => {
  return [{ title: 'Tiptop' }, { name: 'description', content: 'Tiptop' }];
};

export default function Index() {
  return (
    <div className="flex flex-auto h-full overflow-hidden">
      <div className="h-full min-w-[320px] w-96">
        <div className="flex flex-col h-full">
          <div className="border-b border-y border-gray-800/50 p-4">
            <p>Studio</p>
            <p>The ultimate CMS for modern developers</p>
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="relative h-full">
              <ul className="flex flex-col">
                <li>
                  <a
                    href="/editor"
                    className="flex items-center justify-between gap-4 px-4 py-3 cursor-pointer hover:bg-gray-800/50"
                  >
                    <div className="relative flex p-1 border rounded-md">
                      <Folder />
                    </div>
                    <div className="flex-1 truncate">
                      <p className="text-base capitalize truncate">Editor</p>
                      <p className=" truncate">Browse and edit your content files.</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="/dsd"
                    className="flex items-center justify-between gap-4 px-4 py-3 cursor-pointer hover:bg-gray-800/50"
                  >
                    <div className="relative flex p-1 border rounded-md">
                      <ImageIcon />
                    </div>
                    <div className="flex-1 truncate">
                      <p className="text-base capitalize truncate">Media</p>
                      <p className=" truncate">Store and manage your medias</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-auto h-full col-span-2">
        main content
      </div>
    </div>
  );
}
