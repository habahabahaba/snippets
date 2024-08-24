'use client';
// 3rd party:
// Redux RTK:
// Store:
// Next:
// React:
// Context:
// Components:
// CSS:
// Types, interfaces and enumns:
import type { FC } from 'react';
import type { Snippet } from '@prisma/client';

interface SnippetEditFormProps {
  snippet: Snippet;
}

const SnippetEditForm: FC<SnippetEditFormProps> = ({ snippet }) => {
  // JSX:
  return <div>{`Client component with the title: "${snippet.title}"`}</div>;
};

export default SnippetEditForm;
