import { Pencil } from 'lucide-react';

export type NavbarProps = {};

export function Navbar(props: NavbarProps) {
  return (
    <header className="w-full p-4 flex justify-between border-b-2 h-16 fixed top-0 left-96 bg-white z-10">
      <div>
        <p className='text-xl font-bold'>Self Governance</p>
      </div>
      <div>right</div>
    </header>
  );
}
