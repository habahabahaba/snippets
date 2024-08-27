'use server';

// 3rd party:
// Prisma:
import { db } from '@/db';
// Next:
import { redirect } from 'next/navigation';
// Types, interfaces and enumns:
type snippet = {
  id: number;
  title: string;
  code: string;
};
// Utils:
import { validStringInput } from '@/utils';

export async function editSnippet(snippet: snippet) {
  const { id, title, code } = snippet;

  console.log('editSnippet action was called.', `Title:${title}, Code:${code}`);

  // Updating the database:
  await db.snippet.update({
    where: { id },
    data: { title, code },
  });

  // Navigating back to snippets page:
  redirect(`/snippets/${id}`);
}
export async function cancelEditSnippet(

) {
  console.log('cancelEditSnippet action was called.');
  redirect('/')
}

export async function deleteSnippet(id: number) {
  console.log('deleteSnippet action was called.', `id: ${id}`);

  // Updating the database:
  await db.snippet.delete({
    where: { id },
  });

  // Navigating back to snippets page:
  redirect(`/`);
}

export async function addSnippet(
  formState: { message: string },
  formData: FormData
) {
  try {
    // Validating inputs:
    const title = formData.get('title');
    const code = formData.get('code');
    const validTitle = validStringInput(
      title,
      'Please provide a longer title.',
      3
    );
    if (typeof validTitle !== 'string') return validTitle;
    const validCode = validStringInput(code, 'Please provide more code.', 6);
    if (typeof validCode !== 'string') return validCode;

    // Creating new record in the database:
    const snippet = await db.snippet.create({
      data: {
        title: validTitle,
        code: validCode,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message };
    } else {
      return { message: 'Something went wrong. We are very sorry!' };
    }
  }

  // Redirecting to the homepage:
  redirect('/'); // Alwayse leave outside of try/catch.
}
