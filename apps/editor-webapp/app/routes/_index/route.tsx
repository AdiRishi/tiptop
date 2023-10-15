import type { MetaFunction } from '@remix-run/cloudflare';
import { Undo } from 'lucide-react';
import DocumentEditor from '~/components/document-editor';
import { Navbar } from '~/components/navbar';

export const meta: MetaFunction = () => {
  return [{ title: 'Tiptop' }, { name: 'description', content: 'Tiptop' }];
};

export default function Index() {
  return (
    <>
      <main className="flex">
        <div className="fixed w-96 left-0 top-0">
          <div id="current-selection" className=" h-screen border-r-2 bg-gray-100">
            <div className='p-6'>
              <div className='text-4xl font-bold leading-normal mb-12'>TIPTOP</div>
              <div>
                <div className='py-2 text-lg'>Editor</div>
                <div className='py-2 text-lg'>Media</div>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-96 w-full">
          <Navbar />
          <div className='p-6 mt-16'>
            <DocumentEditor />
          </div>
        </div>
      </main>
    </>
  );
}
