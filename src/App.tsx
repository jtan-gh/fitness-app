import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Home, Contacts } from './pages';
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/theme';
import './themes/app.css'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';

function App() {
  return (
  <ThemeProvider theme={theme}>
    <I18nextProvider i18n={i18n}>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
          </Routes>
        </div>
      </Router>
    </I18nextProvider>
  </ThemeProvider>
  );
}

export default App;
