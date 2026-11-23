/**
 * Color primitives and semantic theme tokens.
 *
 * Ported from the People Space design system
 * (packages/design-system/src/tokens/colors.css + aliases.css) — this is
 * the source of truth for the design system's color palette. Values are
 * mirrored (by hand) into `src/styles/tokens.css` and `src/styles/theme.css`
 * as CSS custom properties, since the library ships a real Tailwind theme
 * rather than a JS-only token system.
 */

export const brand = {
  900: '#31531C',
  800: '#416E26',
  700: '#518A2F',
  600: '#61A539',
  500: '#72BF44',
  400: '#80C557',
  300: '#8ECC69',
  200: '#9CD27C',
  100: '#AAD98F',
  50: '#B8DFA2',
  40: '#CAE7B9',
  30: '#DBEFD1',
  20: '#EDF7E8',
} as const;

export const gray = {
  900: '#0e121b',
  800: '#222530',
  700: '#2b303b',
  600: '#525866',
  500: '#717784',
  400: '#99a0ae',
  300: '#cacfd8',
  200: '#e1e4ea',
  100: '#f2f5f8',
  50: '#f5f7fa',
  20: '#f7f9fc',
} as const;

export const white = '#FEFEFE';

export const green = {
  900: '#0b4627',
  800: '#0f5c33',
  700: '#3D8B46',
  600: '#199754',
  500: '#1fc16b',
  400: '#5ed495',
  300: '#83dfae',
  200: '#aeeacb',
  100: '#d0f5e1',
  50: '#e0faec',
} as const;

export const blue = {
  900: '#2443B8',
  800: '#2E63D6',
  700: '#3475E8',
  600: '#3C88F7',
  500: '#4396F7',
  400: '#54A6F8',
  300: '#71B6F9',
  200: '#9ACAFA',
  100: '#C1DEFC',
  50: '#E6F2FE',
} as const;

export const purple = {
  900: '#081FA6',
  800: '#0E2AB2',
  700: '#2431B9',
  600: '#3838C1',
  500: '#453DC7',
  400: '#6559D0',
  300: '#8377D7',
  200: '#A89DE2',
  100: '#CBC4ED',
  50: '#EAE7F7',
  20: '#F5F3FB',
} as const;

export const pink = {
  900: '#4A0A20',
  800: '#79012F',
  700: '#A2023F',
  600: '#AD0244',
  500: '#CA024F',
  400: '#F50260',
  300: '#FD2779',
  200: '#FE7DAF',
  100: '#FEA8C9',
  50: '#FFD4E4',
} as const;

export const red = {
  900: '#8b1822',
  800: '#ad1f2b',
  700: '#d02533',
  600: '#e93544',
  500: '#fb3748',
  400: '#ff6875',
  300: '#ff97a0',
  200: '#ffc0c5',
  100: '#ffd5d8',
  50: '#ffebec',
  20: '#fff4f4',
} as const;

export const yellow = {
  900: '#EB7520',
  800: '#ED912A',
  700: '#EEA02F',
  600: '#F0B134',
  500: '#F1BE39',
  400: '#F2C74A',
  300: '#F4D264',
  200: '#F7DE8E',
  100: '#FAEBB9',
  50: '#FDF7E4',
} as const;

export const colorPrimitives = { brand, gray, green, blue, purple, pink, red, yellow } as const;

export type ColorScale = typeof gray;
export type ColorPrimitives = typeof colorPrimitives;

/**
 * Semantic aliases — components and consumer apps reference these, never
 * the raw scales above directly. Mirrors src/styles/theme.css.
 */
export const lightTheme = {
  bgDefault: white,
  bgContainer: gray[50],
  bgSubtle: gray[100],
  bgBrandLighter: brand[20],
  bgInfoLighter: blue[50],
  bgSuccessLighter: green[50],
  bgWarningLighter: yellow[50],
  bgDangerLighter: red[50],

  fgDefault: gray[900],
  fgSecondary: gray[600],
  fgTertiary: gray[500],
  fgDisabled: gray[400],
  fgInverse: white,
  fgBrand: brand[500],
  fgInfo: blue[600],
  fgSuccess: green[600],
  fgWarning: yellow[800],
  fgDanger: red[600],

  borderDefault: gray[200],
  borderSubtle: gray[100],
  borderStrong: gray[300],
  borderBrand: brand[500],

  iconPrimary: gray[900],
  iconSecondary: gray[600],
  iconInverse: white,
  iconBrand: brand[500],
  iconInfo: blue[600],
  iconDanger: red[800],
  iconWarning: yellow[800],
} as const;

export const darkTheme = {
  ...lightTheme,
  bgDefault: '#0B1120',
  bgContainer: '#0F172A',
  bgSubtle: '#121C30',
  bgBrandLighter: 'rgba(114, 191, 68, 0.15)',
  bgInfoLighter: 'rgba(67, 150, 247, 0.15)',
  bgSuccessLighter: 'rgba(31, 193, 107, 0.15)',
  bgWarningLighter: 'rgba(237, 145, 42, 0.15)',
  bgDangerLighter: 'rgba(230, 27, 0, 0.15)',

  fgDefault: white,
  fgSecondary: gray[400],
  fgTertiary: gray[500],
  fgDisabled: gray[600],
  fgDanger: red[600],

  borderDefault: 'rgba(255, 255, 255, 0.05)',
  borderSubtle: 'rgba(255, 255, 255, 0.03)',
  borderStrong: 'rgba(255, 255, 255, 0.10)',

  iconPrimary: white,
  iconSecondary: gray[400],
} as const;

export type SemanticTheme = typeof lightTheme;
