import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from './store';
import { Root } from './views/Root';
import { ThemeProvider } from '@emotion/react';
import theme from './core/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <Root/>
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>
);
