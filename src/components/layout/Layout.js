import React from 'react';
import Navbar from "../Navbar/Navbar"
import { GlobalStyles } from "../styles/GlobalStyles/GlobalStyles"
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/ThemeStyles/ThemeStyles';
import { Helmet } from 'react-helmet';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;700&display=swap" />
      </Helmet>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Navbar />
        <main>
          {children}
        </main>
      </ThemeProvider>
    </>
  )
}

export default Layout;