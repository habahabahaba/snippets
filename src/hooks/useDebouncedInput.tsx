// 3rd party:
// Redux RTK:
// Store:
// React:
import { useState, useRef } from 'react';
// Context:

// Types, interfaces and enumns:

export function useDebouncedInput<T>(
  initialState: T | string = ''
): [T | string, (value: T | string | undefined) => void] {
  const [value, setValue] = useState<T | string>(initialState);

  // Handler:
  // For debouncing:
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  //   For value change:
  function handleChange(value: T | string | undefined) {
    if (value === undefined) return;
    // Debouncing:
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      console.log('From useDebouncedInput onChange: ', value);
      setValue(value);
    }, 600);
  }
  return [value, handleChange];
}
