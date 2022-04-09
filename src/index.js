import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import store from "./store"
import { Provider } from "react-redux"
// import bromideMainTheme from "./themes/bromideTheme"

const container = document.getElementById('app');
// Create a root.
const root = createRoot(container);

// console.log(bromideTheme)

const bromideMainTheme = {
            palette: {
              primary: {
                main: '#000000',
              },
              secondary: {
                main: '#6868ac',
              },
              error: {
                main: '#e9435e',
              },
              warning: {
                main: '#edc271',
              },
              info: {
                main: '#85a0ac',
              },
              success: {
                main: '#9be0a3',
                  }
              }
            } 


const bromideTheme = createTheme(bromideMainTheme)

// Initial render
root.render(
  <Provider store={store}>
    <ThemeProvider theme={bromideTheme}>
      <App/>
    </ThemeProvider>
  </Provider>
);

