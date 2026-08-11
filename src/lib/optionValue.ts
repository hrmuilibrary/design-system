import type { OptionValue } from '../types';

/**
 * Compares two option/radio values for equality the same way every
 * component in this library does: coerced to `String(...)` first, since
 * `OptionValue` (and `RadioValue`, which adds `boolean`) may mix strings and
 * numbers. `undefined` never equals anything, including another `undefined`.
 */
export const isSameOptionValue = (
  a: OptionValue | boolean | undefined,
  b: OptionValue | boolean | undefined,
): boolean => a !== undefined && b !== undefined && String(a) === String(b);

/** Whether `v` is present in `list`, compared via `isSameOptionValue`. */
export const includesOptionValue = (
  list: readonly (OptionValue | boolean)[],
  v: OptionValue | boolean,
): boolean => list.some((x) => isSameOptionValue(x, v));
