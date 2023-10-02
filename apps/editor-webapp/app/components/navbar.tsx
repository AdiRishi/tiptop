import { Pencil } from 'lucide-react';

export type NavbarProps = {};

export function Navbar(props: NavbarProps) {
  return (
    <header className="w-full p-2 flex justify-between">
      <div>
        <Pencil className="inline-block" /> Tiptop
      </div>
      <div>right</div>
    </header>
  );
}
