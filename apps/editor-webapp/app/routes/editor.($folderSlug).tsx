import { Link, Outlet } from '@remix-run/react';
import { Folder, ChevronLeft } from 'lucide-react';

export default function EditorLayout() {
  return (
    <div className="flex flex-auto h-full overflow-hidden">
      <div className="h-full min-w-[320px] w-96">
        <div className="flex flex-col h-full">
          <div className="border-b border-y border-gray-800/50 p-4">
            <div className="flex flex-row">
              <Link
                to="/"
                className="focus:outline-none mr-4 focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-lg text-sm gap-x-2 p-2 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 inline-flex items-center"
              >
                <button>
                  <ChevronLeft />
                </button>
              </Link>
              <div className="flex flex-col">
                <p>Editor</p>
                <p>Browse and edit your content files.</p>
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="relative flex flex-col h-full">
              <ul className="flex flex-col">
                <li className="px-4 py-2">
                  <div className="flex items-center justify-between flex-1">
                    <div className="flex items-center flex-1 gap-3">
                      <div className="relative flex p-1 bg-gray-800 border border-gray-700 rounded-md">
                        <Folder />
                      </div>
                      <span className="min-w-0 truncate">awesome</span>
                    </div>
                  </div>
                </li>
                <li className="px-4 py-2">
                  <div className="flex items-center justify-between flex-1">
                    <div className="flex items-center flex-1 gap-3">
                      <div className="relative flex p-1 bg-gray-800 border border-gray-700 rounded-md">
                        <Folder />
                      </div>
                      <span className="min-w-0 truncate">awesome</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-auto h-full col-span-2">
        <Outlet />
      </div>
    </div>
  );
}
