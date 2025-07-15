import { DefaultTheme } from 'styled-components';
import { breakpoints } from './breakpoints';

export const lightTheme: DefaultTheme = {
  colors: {
    primary: '#ee72d5',
    secondary: '#757575',
    background: '#ffffff',
    text: '#333333',
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
