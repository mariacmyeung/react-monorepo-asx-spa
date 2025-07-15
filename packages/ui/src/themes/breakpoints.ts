export const breakpoints = {
  xs: '0px',
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1920px',
};

type Breakpoint = keyof typeof breakpoints;

export const up = (bp: Breakpoint) => `@media (min-width: ${breakpoints[bp]})`;
export const down = (bp: Breakpoint) => `@media (max-width: ${breakpoints[bp]})`;