'use client';

// 3rd party:
// Monaco:
import { Editor } from '@monaco-editor/react';
// Redux RTK:
// Store:
// Next:
import { redirect } from 'next/navigation';
// Actions:
import * as actions from '@/actions';
// React:
import { useState } from 'react';
// Context:
// Components:
// Hooks:
// CSS:
// Utils:
import { setTWClassToError } from '@/utils';
// Types, interfaces and enumns:
import type { FC, FormEventHandler } from 'react';
import type { Snippet } from '@prisma/client';
interface SnippetEditFormProps {
  snippet: Snippet;
}
interface SnippetEditFormError {
  title: Boolean;
}
const editorOptions = { minimap: { enabled: false }, fontSize: 15 };

const SnippetEditForm: FC<SnippetEditFormProps> = ({ snippet }) => {
  // State:
  const [error, setError] = useState<SnippetEditFormError>({ title: false });
  const [title, setTitle] = useState<string>(snippet.title);
  const [code, setCode] = useState<string>(snippet.code);

  // Title CSS classes
  const titleClass = 'p-1 border-gray-300 border-2 rounded';

  // Handlers:
  //   For title change:
  function handleTitleChange(value: string = '') {
    // Resetting title error:
    setError((current) => ({ ...current, title: false }));

    console.log('From title onChange: ', value);
    setTitle(value);
  }
  // For code change:
  function handleCodeChange(value: string = '') {
    console.log('From editor onChange: ', value);
    setCode(value);
  }
  // For submit:
  const handleSubmit: FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();

    // Validation:
    const trimmed = title.trim();
    if (!trimmed) {
      setError((current) => ({ ...current, title: true }));
      setTitle('');
      return;
    }
    submitSnippetAction();
  };

  //   Actions:
  const submitSnippetAction = actions.editSnippet.bind(null, {
    id: +snippet.id,
    title,
    code,
  });

  // JSX:
  return (
    <form
      className='flex flex-col justify-between gap-3 pt-3'
      onSubmit={handleSubmit}
    >
      <h1 className='text-xl font-bold'>Editing: </h1>
      <input
        type='text'
        placeholder='Please, provide a title...'
        value={title}
        name='title'
        id='title'
        onChange={(ev) => {
          handleTitleChange(ev.target.value);
        }}
        className={error.title ? setTWClassToError(titleClass) : titleClass}
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
        <button
          className='p-2 border rounded'
          onClick={(ev) => {
            ev.preventDefault();
            console.log('Cancel');
            redirect('/');
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default SnippetEditForm;
