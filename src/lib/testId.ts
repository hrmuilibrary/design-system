/**
 * Builds a `data-test-id` factory from a root `dataTestId` prefix.
 * Returns a function that appends a suffix (`${prefix}-${suffix}`), or
 * `undefined` when no prefix was supplied so the attribute is omitted.
 */
export const createTestId =
  (prefix?: string) =>
  (suffix: string): string | undefined =>
    prefix ? `${prefix}-${suffix}` : undefined;
