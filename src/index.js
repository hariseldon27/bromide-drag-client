import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import store from "./store"
import { Provider } from "react-redux"

const container = document.getElementById('app');
// Create a root.
const root = createRoot(container);

// const bromideTheme = createTheme({bromideMainTheme})
// console.log(bromideTheme)

const theme = createTheme({
  palette: {
    secondary: {
      main: "#000000",
    },
  }
});

// Initial render
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </Provider>
);

