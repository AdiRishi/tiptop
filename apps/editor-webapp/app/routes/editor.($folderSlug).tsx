import { redirect, type LoaderFunctionArgs } from '@remix-run/cloudflare';
import { Link, Outlet, useLoaderData } from '@remix-run/react';
import { Folder, ChevronLeft, FileText } from 'lucide-react';
import { dirname } from 'node:path';
import { createGraphqlClient } from '~/graphql/gql-client.server';
import { AssetBrowserQuery } from '~/graphql/queries.server';

export const loader = async (args: LoaderFunctionArgs) => {
  let folderPath = args.params.folderSlug;
  if (folderPath) {
    folderPath = '/' + slugToPath(decodeURIComponent(folderPath));
  } else {
    folderPath = '/';
  }
  console.log('folder path is ', folderPath);

  const gql = createGraphqlClient(args.context.env);
  const data = await gql.request(AssetBrowserQuery, { folderSlug: folderPath });
  if (!data.folderByPath) {
    return redirect('/editor');
  }
  return {
    folderData: data.folderByPath,
  };
};

export default function EditorLayout() {
  const data = useLoaderData<typeof loader>();

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
                {data.folderData.path === '/' ? <p>Editor</p> : <p>{data.folderData.name}</p>}
                <p>Browse and edit your content files.</p>
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="relative flex flex-col h-full">
              <ul className="flex flex-col">
                {data.folderData.path !== '/' ? (
                  <RenderBrowserItem
                    itemType="Folder"
                    name="../"
                    path={dirname(data.folderData.path)}
                  />
                ) : null}
                {data.folderData.children.map((child) => (
                  <RenderBrowserItem
                    key={child.id}
                    itemType="Folder"
                    name={child.name}
                    path={child.path}
                  />
                ))}
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

function RenderBrowserItem({
  itemType,
  name,
  path,
}: {
  itemType: 'Folder' | 'Asset';
  name: string;
  path: string;
}) {
  return (
    <li className="px-4 py-2">
      <Link to={`/editor/${encodeURIComponent(pathToSlug(path))}`}>
        <div className="flex items-center justify-between flex-1">
          <div className="flex items-center flex-1 gap-3">
            <div className="relative flex p-1 bg-gray-800 border border-gray-700 rounded-md">
              {itemType === 'Folder' ? <Folder /> : <FileText />}
            </div>
            <span className="min-w-0 truncate">{name}</span>
          </div>
        </div>
      </Link>
    </li>
  );
}

function slugToPath(slug: string) {
  return slug.replace(/\|/g, '/');
}

function pathToSlug(path: string) {
  // Remove leading slash if it exists
  if (path.startsWith('/')) {
    path = path.substring(1);
  }

  // Replace all remaining slashes with '|'
  return path.replace(/\//g, '|');
}
