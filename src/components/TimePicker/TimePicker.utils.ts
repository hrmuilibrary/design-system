/**
 * Pure helpers behind TimePicker. Times are always 24-hour `"HH:mm"` strings
 * (zero-padded), so plain string comparison orders them chronologically.
 */

const MINUTES_PER_DAY = 24 * 60;
const DEFAULT_STEP = 15;

export const pad2 = (n: number) => String(n).padStart(2, '0');

/** Minutes since midnight → `"HH:mm"`. */
export function minutesToTime(minutes: number): string {
  return `${pad2(Math.floor(minutes / 60))}:${pad2(minutes % 60)}`;
}

/** `"HH:mm"` (or `"H:mm"`) → minutes since midnight, or `null` if it isn't a valid 24h time. */
export function timeToMinutes(time: string): number | null {
  const match = /^(\d{1,2}):(\d{2})$/.exec(time.trim());
  if (!match) return null;
  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  if (hours > 23 || minutes > 59) return null;
  return hours * 60 + minutes;
}

/** Normalizes `"9:05"` → `"09:05"`; `null` for anything that isn't a valid 24h time. */
export function normalizeTime(time: string | null | undefined): string | null {
  if (time == null) return null;
  const minutes = timeToMinutes(time);
  return minutes === null ? null : minutesToTime(minutes);
}

/** Clamps `step` to a whole number of minutes in 1–1440; invalid values fall back to 15. */
export function safeStep(step: number | undefined): number {
  return step !== undefined && Number.isFinite(step) && step >= 1 && step <= MINUTES_PER_DAY
    ? Math.floor(step)
    : DEFAULT_STEP;
}

/** Every `step` minutes from 00:00 up to (not past) 23:59. */
export function generateTimes(step?: number): string[] {
  const s = safeStep(step);
  const times: string[] = [];
  for (let m = 0; m < MINUTES_PER_DAY; m += s) times.push(minutesToTime(m));
  return times;
}

export interface TimeConstraints {
  minTime?: string;
  maxTime?: string;
  excludeTimes?: string[];
  filterTime?: (time: string) => boolean;
}

/** Builds the "is this time unavailable?" predicate from TimePicker's constraint props. */
export function createTimeDisabler({
  minTime,
  maxTime,
  excludeTimes,
  filterTime,
}: TimeConstraints): (time: string) => boolean {
  const min = normalizeTime(minTime);
  const max = normalizeTime(maxTime);
  const excluded = new Set(
    (excludeTimes ?? []).map(normalizeTime).filter((t): t is string => t !== null),
  );
  return (time) =>
    (min !== null && time < min) ||
    (max !== null && time > max) ||
    excluded.has(time) ||
    (filterTime ? !filterTime(time) : false);
}

const isMinuteLead = (d: string | undefined) => d !== undefined && Number(d) <= 5;

/**
 * A *complete* time typed by the user, normalized to `"HH:mm"`, or `null` if
 * the text is partial or invalid. Accepts `"930"` / `"0930"` (digits only;
 * 3 digits read as H:MM), `"9:30"` / `"09:30"`, and `"9.30"`.
 */
export function parseTypedTime(input: string): string | null {
  const text = input.trim().replace('.', ':');
  if (/^\d{1,2}:\d{2}$/.test(text)) return normalizeTime(text);
  if (/^\d{3}$/.test(text))
    return isMinuteLead(text[1]) ? normalizeTime(`${text[0]}:${text.slice(1)}`) : null;
  if (/^\d{4}$/.test(text)) return normalizeTime(`${text.slice(0, 2)}:${text.slice(2)}`);
  return null;
}

/**
 * Whether a keystroke may type a character into the time field: digits and
 * `:` only. Editing keys and shortcuts aren't plain characters, so they pass.
 */
export function isTimeInputKey(event: {
  key: string;
  ctrlKey: boolean;
  metaKey: boolean;
  altKey: boolean;
}): boolean {
  if (event.ctrlKey || event.metaKey || event.altKey) return true;
  if (event.key.length > 1) return true;
  return /[\d:]/.test(event.key);
}

/**
 * The prefix of `"HH:mm"` options that match partially typed text:
 * `"9"` → `"09"`, `"1"` → `"1"` (01, 10–19), `"14"` → `"14:"`, `"93"` → `"09:3"`,
 * `"9:3"` → `"09:3"`, `"175"` → `"17:5"`. `null` when the text can't be a time.
 */
export function typedTimePrefix(input: string): string | null {
  const text = input.trim().replace('.', ':');
  if (text === '') return '';
  const complete = parseTypedTime(text);
  if (complete) return complete;

  const withSeparator = /^(\d{1,2}):(\d?)$/.exec(text);
  if (withSeparator) {
    const hour = Number(withSeparator[1]);
    const minuteLead = withSeparator[2] ?? '';
    if (hour > 23 || (minuteLead !== '' && !isMinuteLead(minuteLead))) return null;
    return `${pad2(hour)}:${minuteLead}`;
  }
  if (!/^\d{1,3}$/.test(text)) return null;
  if (text.length === 1) return Number(text) <= 2 ? text : `0${text}`;
  if (text.length === 2) {
    if (Number(text) <= 23) return `${text}:`;
    return isMinuteLead(text[1]) ? `0${text[0]}:${text[1]}` : null;
  }
  // 3 digits that aren't a complete H:MM (e.g. "175" → 17:5x).
  return Number(text.slice(0, 2)) <= 23 && isMinuteLead(text[2])
    ? `${text.slice(0, 2)}:${text[2]}`
    : null;
}

/**
 * Whether a suggested option should stay visible for the typed text. Partial
 * text keeps every suggestion it's a prefix of ("9" → the 09 hour). A
 * complete time narrows the list to that time alone: just the suggestion if
 * there is one, otherwise nothing here (the typed-time row is added
 * separately). Keeping other rows visible would let react-select's highlight
 * stay on them — e.g. on the selected 01:15 while editing it to 01:18 — so
 * Enter would pick that row instead of the typed time.
 */
export function matchesTypedTime(option: string, input: string): boolean {
  const prefix = typedTimePrefix(input);
  return prefix !== null && option.startsWith(prefix);
}

/**
 * Applies an `"HH:mm"` time to a date: a new `Date` on `base`'s calendar day
 * (default: today) at that local time, seconds zeroed. Throws on an invalid time.
 */
export function timeToDate(time: string, base: Date = new Date()): Date {
  const minutes = timeToMinutes(time);
  if (minutes === null) throw new RangeError(`timeToDate: "${time}" is not a valid HH:mm time`);
  const date = new Date(base.getTime());
  date.setHours(Math.floor(minutes / 60), minutes % 60, 0, 0);
  return date;
}

/** A `Date`'s local time as a 24-hour `"HH:mm"` string. */
export function dateToTime(date: Date): string {
  return `${pad2(date.getHours())}:${pad2(date.getMinutes())}`;
}
