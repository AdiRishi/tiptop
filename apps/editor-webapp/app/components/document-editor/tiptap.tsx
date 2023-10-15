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
    <div className="w-full bg-white dark:bg-gray-900 rounded-lg overflow-hidden border">
      <MenuBar />
      <EditorContent
        editor={editor}
        className="w-full focus:outline-none focus:shadow-outline border border-input bg-background px-3 py-3 text-sm ring-offset-background placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
  );
}
