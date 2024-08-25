'use server';

// 3rd party:
// Prisma:
import { db } from '@/db';

export async function editSnippet(id: number, code: string, title?: string) {
  console.log('editSnippetcl action was called.');
}
