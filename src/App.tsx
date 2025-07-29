import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { Home, Contacts } from './pages';
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/theme';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';
import { CssBaseline } from '@mui/material';
import About from './pages/About/About';
import MembershipPage from './pages/Membership/MembershipPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
          <CssBaseline />
          <Router>
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/classes" element={<MembershipPage />}></Route>
                <Route path="/contact" element={<Contacts />}></Route>
              </Routes>
              <Footer />
            </>
          </Router>
      </I18nextProvider>
    </ThemeProvider>
  );
}

export default App;
