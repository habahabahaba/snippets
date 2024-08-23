// 3rd party:
import { db } from '@/db';
// Redux RTK:
// Store:
// Next:
import { notFound } from 'next/navigation';
// React:
// Context:
// Components:
// CSS:
// Types, interfaces and enumns:
import { FC } from 'react';
interface SnippetEditPageProps {
  params: { id: string };
  searchParams?: any;
}

const SnippetEditPage: FC<SnippetEditPageProps> = async ({
  params,
  searchParams,
}) => {
  const id = +params.id;
  //   Fetching the snippet:
  const snippet = await db.snippet.findFirst({
    where: { id: +params.id },
  });

  // If there's no such snippet:
  if (!snippet) return notFound();

  // JSX:
  return (
    <div>
      <div className='flex m-4 justify-between items-start '>
        <h1 className='text-xl font-bold'>{snippet.title}</h1>
        <div className='flex  gap-3'>
          <button className='p-2 border rounded'>Save</button>
          <button className='p-2 border rounded'>Cancel</button>
        </div>
      </div>
      <pre className='p-3 border rounded bg-gray-200 border-gray-200'>
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};

export default SnippetEditPage;
