import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Home, Contacts } from './pages';
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/theme';
import './themes/app.css'

function App() {
  return (
  <ThemeProvider theme={theme}>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
        </Routes>
      </div>
    </Router>
  </ThemeProvider>
  );
}

export default App;
