import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { bromideMainTheme } from "./themes/bromideThemes"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import store from "./store"
import { Provider } from "react-redux"
import ModeSwitch from './components/ModeSwitch';

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

console.log(theme)
// Initial render
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </Provider>
);

