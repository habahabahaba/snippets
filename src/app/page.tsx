// 3rd party:
import { db } from '@/db';
// Redux RTK:
// Store:
// Next:
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
    <div key={snippet.id}>{snippet.title}</div>
  ));

  return <div>{renderedSnippets}</div>;
}
