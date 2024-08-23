// 3rd party:
import { db } from '@/db';
// Redux RTK:
// Store:
// Next:
import Link from 'next/link';
// React:
// Context:
// Components:
// CSS:
// Types, interfaces and enumns:

export default async function Home() {
  // Fetching snippets:
  const snippets = await db.snippet.findMany();

  // JSX:
  const renderedSnippets = snippets.map((snippet) => (
    <Link
      key={snippet.id}
      href={`/snippets/${snippet.id}`}
      className='flex justify-between items-center py-2 px-3 border rounded'
    >
      {snippet.title}
      <div>View</div>
    </Link>
  ));

  return (
    <div>
      <div className='flex m-2 justify-between items-center'>
        <h1 className='text-xl font-bold'>Snippets</h1>
        <Link href='/snippets/new' className='border p-2 rounded'>
          New
        </Link>
      </div>
      <div className='flex flex-col gap-2'>{renderedSnippets}</div>
    </div>
  );
}
