'use client';

// 3rd party:
// Redux RTK:
// Store:
// React:
// Context:
// Components:
// CSS:
// Types, interfaces and enumns:
import type { FC } from 'react';
interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const ErrorPage: FC<ErrorPageProps> = ({ error }) => {
  // JSX:
  return <div>{error.message}</div>;
};

export default ErrorPage;
