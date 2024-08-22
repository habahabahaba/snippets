// 3rd party:
import { db } from '@/db';
// Redux RTK:
// Store:
// Next:
import { redirect } from 'next/navigation';
// React:
// Context:
// Components:
// CSS:
// Types, interfaces and enumns:
import { FC } from 'react';
interface NewSnippetPageProps {}

const NewSnippetPage: FC<NewSnippetPageProps> = () => {
  // Server action:
  async function addSnippet(formData: FormData) {
    // Declaring server action:
    'use server';

    // Validating inputs:
    const title = formData.get('title') as string;
    const code = formData.get('code') as string;

    // Creating new record in the database:
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log(snippet);

    // Redirecting to the homepage:
    redirect('/');
  }

  // JSX:
  return (
    <form action={addSnippet}>
      <h3 className='font-bold m-3'>Add Snippet</h3>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4'>
          <label className='w-12' htmlFor='title'>
            Title
          </label>
          <input
            type='text'
            name='title'
            className='border rounded p-2 w-full'
            id='title'
          />
        </div>
        <div className='flex gap-4'>
          <label className='w-12' htmlFor='code'>
            Code
          </label>
          <textarea
            name='code'
            className='border rounded p-2 w-full'
            id='code'
          />
        </div>
        <button type='submit' className='rounded p-2 bg-blue-200'>
          Add
        </button>
      </div>
    </form>
  );
};

export default NewSnippetPage;
