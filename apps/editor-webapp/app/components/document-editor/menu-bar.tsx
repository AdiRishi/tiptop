import { Bold, Italic, Underline } from 'lucide-react';
import { Toggle } from '~/components/ui/toggle';

export default function MenuBar() {
  return (
    <div className="flex space-x-2 p-2 border border-gray-200">
      <Toggle className="text-gray-600 dark:text-gray-400">
        <span className="sr-only">Bold</span>
        <Bold className="w-5 h-5" />
      </Toggle>
      <Toggle className="text-gray-600 dark:text-gray-400">
        <span className="sr-only">Italic</span>
        <Italic className="w-5 h-5" />
      </Toggle>
      <Toggle className="text-gray-600 dark:text-gray-400">
        <span className="sr-only">Underline</span>
        <Underline className="w-5 h-5" />
      </Toggle>
    </div>
  );
}
