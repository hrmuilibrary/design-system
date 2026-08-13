/** Shared props every component accepts for QA/e2e hooks. */
export interface BaseProps {
  /** Rendered as `data-test-id` for test selectors. */
  dataTestId?: string;
}

/**
 * An option/item identity that can be a string or a number — compared
 * internally via `String(...)`. Note: values are compared via `String(...)`,
 * so within one options array a numeric `1` and a string `'1'` are treated
 * as the same option — don't mix the two representations for what should be
 * distinct options.
 */
export type OptionValue = string | number;
