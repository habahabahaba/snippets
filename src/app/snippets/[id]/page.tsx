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
interface SnippetShowPageProps {
  params: { id: string };
  searchParams?: any;
}

const SnippetShowPage: FC<SnippetShowPageProps> = async ({
  params,
  searchParams,
}) => {
  console.log(params, searchParams);
  //   Fetching the snippet:
  const snippet = await db.snippet.findFirst({
    where: { id: +params.id },
  });

  // If there's no such snippet:
  if (!snippet) return notFound();

  // JSX:
  return (
    <div>{`Look, it's a Snippet with the id of ${params.id} and the title of: "${snippet.title}" !!!`}</div>
  );
};

export default SnippetShowPage;
