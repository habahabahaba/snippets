// 3rd party:
import { db } from '@/db';
// Redux RTK:
// Store:
// Next:
import { notFound } from 'next/navigation';
import Link from 'next/link';
// Actions:
import * as actions from '@/actions';
// React:
// Context:
// Components:
// CSS:
// Types, interfaces and enumns:
import { FC } from 'react';
interface SnippetShowPageProps {
  params: { id: string };
  searchParams?: any;
}

const SnippetShowPage: FC<SnippetShowPageProps> = async ({
  params,
  searchParams,
}) => {
  //   await new Promise((r) => {
  //     setTimeout(r, 2000);
  //   });
  console.log(params, searchParams);
  //   Fetching the snippet:
  const snippet = await db.snippet.findFirst({
    where: { id: +params.id },
  });

  // If there's no such snippet:
  if (!snippet) return notFound();

  // Actions:
  const deleteSnippetAction = actions.deleteSnippet.bind(null, +snippet.id);

  // JSX:
  return (
    <div>
      <div className='flex m-4 justify-between items-start '>
        <h1 className='text-xl font-bold'> {snippet.title}</h1>
        <div className='flex  gap-3'>
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className='p-2 border rounded'
          >
            Edit
          </Link>
          <form action={deleteSnippetAction}>
            <button className='p-2 border rounded'>Delete</button>
          </form>
        </div>
      </div>
      <pre className='p-3 border rounded bg-gray-200 border-gray-200'>
        <code>{snippet.code}</code>
      </pre>
      <div className='flex  gap-3 my-4 justify-end'>
        <Link href={`/`} className='p-2 border rounded'>
          Back to snippets...
        </Link>
      </div>
    </div>
  );
};

export default SnippetShowPage;
