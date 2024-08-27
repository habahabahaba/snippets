// Types, interfaces and enumns:
type errorMessage = { message: string };

// Helper validation function:
export function validStringInput(
  input: unknown,
  errorMsg: string,
  expectedLength: number = 1
): errorMessage | string {
  if (typeof input !== 'string' || input.trim().length < expectedLength) {
    return {
      message: errorMsg,
    };
  }
  return input.trim();
}

export function setTWClassToError(twClass: string): string {
  return twClass + '  border-red-600';
}
