// 3rd party:
// Prisma:
import { db } from '@/db';

// Redux RTK:
// Store:
// Next:
import { notFound } from 'next/navigation';
// React:
// Context:
// Components:
import SnippetEditForm from '@/Components/SnippetEditForm';
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
    where: { id },
  });

  // If there's no such snippet:
  if (!snippet) return notFound();

  // JSX:
  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
};

export default SnippetEditPage;
