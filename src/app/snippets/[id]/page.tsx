// 3rd party:
import { db } from '@/db';
// Redux RTK:
// Store:
// Next:
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { redirect } from 'next/navigation';
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

  // JSX:
  return (
    <div>
      <div className='flex m-4 justify-between items-start '>
        <h1 className='text-xl font-bold'>Editing {snippet.title}</h1>
        <div className='flex  gap-3'>
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className='p-2 border rounded'
          >
            Edit
          </Link>
          <button className='p-2 border rounded'>Delete</button>
        </div>
      </div>
      <pre className='p-3 border rounded bg-gray-200 border-gray-200'>
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};

export default SnippetShowPage;
