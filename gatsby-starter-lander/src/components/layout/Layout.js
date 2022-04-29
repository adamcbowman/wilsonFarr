import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wilson & Farr Cleaning Solutions</title>
        <meta name="description" content="Wilson & Farr Cleaning Solutions" />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
