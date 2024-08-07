// src/App.tsx

import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Sidebar />
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
