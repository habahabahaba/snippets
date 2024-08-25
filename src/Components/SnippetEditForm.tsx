'use client';
// 3rd party:
// Monaco:
import { Editor } from '@monaco-editor/react';
// Redux RTK:
// Store:
// Next:
import * as actions from '@/actions';
// React:
import { useState, useRef } from 'react';
// Context:
// Components:
// Hooks:
import { useDebouncedInput } from '@/hooks';
// CSS:
// Types, interfaces and enumns:
import type { FC } from 'react';
import type { Snippet } from '@prisma/client';

interface SnippetEditFormProps {
  snippet: Snippet;
}

const editorOptions = { minimap: { enabled: false } };

const SnippetEditForm: FC<SnippetEditFormProps> = ({ snippet }) => {
  //   // State:
  //   const [title, setTitle] = useState<string>(snippet.title);
  //   const [code, setCode] = useState<string>(snippet.code);

  //   // Handlers:
  //   // For debouncing:
  //   const codeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  //   const titleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  //   //   For code change:
  //   function handleEditorChange(value: string = '') {
  //     // Debouncing:
  //     if (codeTimeoutRef.current) {
  //       clearTimeout(codeTimeoutRef.current);
  //     }
  //     codeTimeoutRef.current = setTimeout(() => {
  //       //   console.log('From editor onChange: ', value);
  //       setCode(value);
  //     }, 600);
  //   }

  const [title, handleTitleChange] = useDebouncedInput(snippet.title);
  const [code, handleCodeChange] = useDebouncedInput(snippet.code);

  //   Actions:
  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);
  // JSX:
  return (
    <form className='flex flex-col justify-between gap-3 pt-3'>
      <input
        type='text'
        placeholder='Please, add a title...'
        value={title}
        onChange={(ev) => {
          handleTitleChange(ev.target.value);
        }}
        className=' border-red-700 border-4 rounded'
      />
      <div className=''>
        <Editor
          height='40vh'
          theme='vs-dark'
          language='javascript'
          defaultValue={snippet.code}
          options={editorOptions}
          onChange={handleCodeChange}
        />
      </div>
      <div className='flex  gap-3'>
        <button className='p-2 border rounded' type='submit'>
          Save
        </button>
        <button className='p-2 border rounded'>Cancel</button>
      </div>
    </form>
  );
};

export default SnippetEditForm;
