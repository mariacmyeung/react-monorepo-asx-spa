import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '@ui/themes';
import { StyledFormButton } from '@ui';

const Root = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <StyledFormButton
        onClick={() => setDarkMode(!darkMode)}
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          zIndex: 1000
        }}
      >
        Toggle Theme
      </StyledFormButton>
      <App />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
