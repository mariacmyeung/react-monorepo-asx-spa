# UI Package: Creating a New Component

This guide explains how to add a new React component to the `ui` package in this monorepo.

## 1. Create a New Component Directory

Inside `packages/ui/src/components/`, create a new folder for your component. For example, to add a `Button` component:

```
packages/ui/src/components/Button/
```

## 2. Add Component Files

A typical component folder should include:
- `Button.tsx` — The main component file
- `Button.styles.ts` — (Optional) Styled-components styles
- `index.ts` — Barrel file for exports

Example structure:
```
Button/
  Button.tsx
  Button.styles.ts
  index.ts
```


## 3. Use Breakpoints for Responsive Design

This package provides a set of breakpoints for responsive design in `src/themes/breakpoints.ts`.

- **Import the breakpoints** in your component or styles:

```ts
import { breakpoints } from '../../themes/breakpoints';
```

- **Example usage in styled-components:**

```ts
import styled from 'styled-components';
import { breakpoints } from '../../themes/breakpoints';

export const StyledButton = styled.button`
  padding: 8px 16px;
  @media (max-width: ${breakpoints.sm}) {
    padding: 6px 12px;
  }
`;
```

## 4. Implement the Component

- Use TypeScript for type safety.
- Use `styled-components` for styling.
- Use the provided breakpoints for responsive styles.

**Example: `Button.tsx`**
```tsx
import React from 'react';
import { StyledButton } from './Button.styles';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);
```

**Example: `Button.styles.ts`**
```ts
import styled from 'styled-components';
import { breakpoints } from '../../themes/breakpoints';

export const StyledButton = styled.button`
  padding: 8px 16px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: ${breakpoints.sm}) {
    padding: 6px 12px;
  }
`;
```

**Example: `index.ts`**
```ts
export * from './Button';
```

## 4. Export the Component

In `packages/ui/src/index.ts`, export your new component:
```ts
export * from './components/Button';
```

## 5. Test the Component

Import and use your new component in an app or a Storybook story to verify it works as expected.

## 6. Commit Your Changes

Follow your team's commit message conventions and push your changes.

---

For questions, contact the project maintainers.
