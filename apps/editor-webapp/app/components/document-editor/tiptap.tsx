import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import MenuBar from './menu-bar';

const extensions = [StarterKit];

export function Tiptap() {
  const editor = useEditor({
    extensions,
    content: '<p>Start writing your document here...</p>',
  });

  return (
    <div className="max-w-[800px] bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden">
      <MenuBar />
      <EditorContent
        editor={editor}
        className="w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
  );
}
