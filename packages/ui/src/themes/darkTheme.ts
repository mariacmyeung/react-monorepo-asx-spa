import { DefaultTheme } from 'styled-components';
import { breakpoints } from './breakpoints';

export const darkTheme: DefaultTheme = {
  colors: {
    primary: '#90caf9',
    secondary: '#b0bec5',
    background: '#121212',
    text: '#ffffff',
  },
  spacing: (factor: number) => `${8 * factor}px`,
  fontSizes: {
    sm: '0.875rem',
    base: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
  },
  breakpoints: {...breakpoints},
};
