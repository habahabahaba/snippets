// 3rd party:
// Redux RTK:
// Store:
// React:
// Context:
// Components:
// CSS:
// Types, interfaces and enumns:
import { FC } from 'react';
interface SnippetShowLoadingProps {}

const SnippetShowLoading: FC<SnippetShowLoadingProps> = () => {
  // JSX:
  return (
    <div>
      <h1 className='text-xl bold '>Loading the snippet ...</h1>
    </div>
  );
};

export default SnippetShowLoading;
