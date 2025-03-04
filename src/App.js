
import React from 'react';
import './App.css';
import BlueButton from './Button/BlueBotton';
import ProductCard from './Card/ProductCard';
import NavbarTest from './Navbar/NavbarTest';
import BigTabMenu from './TabMenu/BigTabMenu';
import TabIcons from './TabMenu/TabIcons';
import TabMenu from './TabMenu/TabMenu';
import VerticalTabIcons from './TabMenu/VerticalTabIcons';

import { ThemeProvider } from './Context/ThemeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './NavbarItems/Home';
import Footer from './Footer/Footer';




function App() {
  return (
    <>
      {/* <NavbarTest />
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <ProductCard />
      <br /> <br /> <br /> <br /> <br />
      <TabMenu />
      <VerticalTabIcons />
      <br /> <br /> <br />
      <BigTabMenu />
      <br /> <br /> <br />
      <TabIcons />
      <br /> <br />
      <BlueButton /> */}

      <ThemeProvider>
        <Navbar />
        <Home />

        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
