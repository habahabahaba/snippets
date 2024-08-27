'use client';

// 3rd party:
// Redux RTK:
// Store:
// Next:
// Actions:
import * as actions from '@/actions';
// React:
import { useFormState } from 'react-dom';
// Context:
// Components:
// CSS:
// Utils:
import { setTWClassToError } from '@/utils';
// Types, interfaces and enumns:
import { FC } from 'react';
interface NewSnippetPageProps {}

const NewSnippetPage: FC<NewSnippetPageProps> = () => {
  // Action and state:
  const [formState, addSnippetAction] = useFormState(actions.addSnippet, {
    message: '',
  });

  // Tailwind classes:
  const titleClass = 'p-2 border-gray-300 border-2 rounded w-full ';
  const codeClass = 'border-2 rounded p-2 w-full';

  // JSX:
  return (
    <form action={addSnippetAction}>
      <h3 className='font-bold m-3'>Add Snippet</h3>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4'>
          <label className='w-12' htmlFor='title'>
            Title
          </label>
          <input
            type='text'
            name='title'
            id='title'
            placeholder='Please, provide a title...'
            className={
              formState.message === 'Please provide a longer title.'
                ? setTWClassToError(titleClass)
                : titleClass
            }
          />
        </div>
        <div className='flex gap-4'>
          <label className='w-12' htmlFor='code'>
            Code
          </label>
          <textarea
            name='code'
            id='code'
            className={
              formState.message === 'Please provide more code.'
                ? setTWClassToError(codeClass)
                : codeClass
            }
          />
        </div>
        {formState.message ? (
          <div className='my-2  p-2 bg-red-200 border border-red-600 rounded'>
            {formState.message}
          </div>
        ) : null}
        <button type='submit' className='rounded p-2 bg-blue-200'>
          Add
        </button>
      </div>
    </form>
  );
};

export default NewSnippetPage;
