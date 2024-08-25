'use client';
// 3rd party:
// Monaco:
import { Editor } from '@monaco-editor/react';
// Redux RTK:
// Store:
// Next:
// React:
import { useState, useRef } from 'react';
// Context:
// Components:
// CSS:
// Types, interfaces and enumns:
import type { FC } from 'react';
import type { Snippet } from '@prisma/client';

interface SnippetEditFormProps {
  snippet: Snippet;
}

const editorOptions = { minimap: { enabled: false } };

const SnippetEditForm: FC<SnippetEditFormProps> = ({ snippet }) => {
  // State:
  const [code, setCode] = useState<string>(snippet.code);
  // Handlers:
  // For debouncing:
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  function handleEditorChange(value: string = '') {
    // Debouncing:
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      //   console.log('From editor onChange: ', value);
      setCode(value);
    }, 600);
  }
  // JSX:
  return (
    <div className=''>
      <Editor
        height='40vh'
        theme='vs-dark'
        language='javascript'
        defaultValue={snippet.code}
        options={editorOptions}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default SnippetEditForm;
