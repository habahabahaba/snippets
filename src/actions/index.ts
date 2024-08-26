'use server';

// 3rd party:
// Prisma:
import { db } from '@/db';

// Types, interfaces and enumns:
type snippet = {
  id: number;
  title: string;
  code: string;
};

export async function editSnippet(snippet: snippet) {
  const { id, title, code } = snippet;
  console.log('editSnippet action was called.', `Title:${title}, Code:${code}`);
}
export async function submitSnippet(
  id: number,
  code: string,
  formData: FormData
) {
  console.log('editSnippet action was called.');
}
