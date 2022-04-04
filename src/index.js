import React from 'react';
import { createRoot } from 'react-dom/client';
import { render } from "react-dom";
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter } from "react-router-dom";
import { bromideMainTheme } from "./themes/bromideThemes"

const container = document.getElementById('app');
// Create a root.
const root = createRoot(container);

const bromideTheme = createTheme({bromideMainTheme})

// Initial render
root.render(
  <BrowserRouter>
    <ThemeProvider theme={bromideTheme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);

