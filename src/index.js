import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const bromideTheme = createTheme({
  palette: {
    primary: {
      main: "#D7EEF7",
    },
    secondary: {
      main: "#6868ac"
    },
    error: {
      main: "#e9435e"
    },
    warning: {
      main: "#edc271"
    },
    info: {
      main: "#85a0ac"
    },
    success: {
      main: "#9BE0A3"
    },

  },
});


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={bromideTheme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

