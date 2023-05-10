import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0496FF',
    },
    secondary: {
      main: '#595959',
    }
  },
  typography: {
    "fontFamily": `"SF Pro", Inter, system-ui, Avenir, Helvetica, Arial, sans-serif`,
    "fontSize": 14,
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
