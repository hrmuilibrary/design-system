/**
 * The "*" rendered after a field label when the field is `required`.
 *
 * Internal on purpose (not exported from the package root): it exists so every
 * form component (Input, TextArea, SelectV2, DatePicker, Checkbox, Radio,
 * Upload) renders the exact same mark and color and can't drift apart again.
 * Consumers building their own labels should use `text-fg-danger` directly.
 *
 * `aria-hidden` because the requirement is already conveyed to assistive tech
 * via the control's native `required` / `aria-required`.
 */
export function RequiredMark() {
  return (
    <span className="text-fg-danger" aria-hidden>
      *
    </span>
  );
}
