// 3rd party:
// Redux RTK:
// Store:
// React:
// Context:
// Components:
// CSS:
// Types, interfaces and enumns:
import { FC } from 'react';
interface SnippetNotFoundProps {}

const SnippetNotFound: FC<SnippetNotFoundProps> = () => {
  // JSX:
  return (
    <div>
      <h1 className='text-xl bold '>
        This particular snippet could not be found... Sorry.
      </h1>
    </div>
  );
};

export default SnippetNotFound;
