// 3rd party:
// Redux RTK:
// Store:
// Next:
// React:
// Context:
// Components:
// CSS:
// Types, interfaces and enumns:
import { FC } from 'react';
interface SnippetShowPageProps {
  params: any;
  searchParams?: any;
}

const SnippetShowPage: FC<SnippetShowPageProps> = ({
  params,
  searchParams,
}) => {
  console.log(params, searchParams);
  // JSX:
  return <div>{`Look, a Snippet with the id of ${params.id} !!!`}</div>;
};

export default SnippetShowPage;
