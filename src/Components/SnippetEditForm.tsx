'use client';
// 3rd party:
// Monaco:
import { Editor } from '@monaco-editor/react';
// Redux RTK:
// Store:
// Next:
// React:
import { useState } from 'react';
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
  function handleEditorChange(value: string = '') {
    console.log('From editor onChange: ', value);
    setCode(value);
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
