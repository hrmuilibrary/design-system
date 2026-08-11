/** Shared props every component accepts for QA/e2e hooks. */
export interface BaseProps {
  /** Rendered as `data-test-id` for test selectors. */
  dataTestId?: string;
}

/** An option/item identity that can be a string or a number — compared internally via `String(...)`. */
export type OptionValue = string | number;
