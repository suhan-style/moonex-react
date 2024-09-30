import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AnimatedCursor from "react-animated-cursor";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import PortfolioTypeOne from './components/PortfolioTypeOne';
import PortfolioTypeTwo from './components/PortfolioTypeTwo';
import CodingTask from './components/CodingTask';
import Contact from './components/Contact';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      delay: 100
    });
  }, []);

  return (
    <>
      <AnimatedCursor
        outerSize={50}
        outerScale={1}
        outerStyle={{
          zIndex: 99999
        }}
        innerStyle={{
          zIndex: 99999
        }}
      />
      {/* Set basename for GitHub Pages deployment */}
      <BrowserRouter basename="/moonex-react">  
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/portfolio-type-1' element={<PortfolioTypeOne />} />
          <Route path='/portfolio-type-2' element={<PortfolioTypeTwo />} />
          <Route path='/coding-task' element={<CodingTask />} />
          <Route path='/contact' element={<Contact />} />
          {/* Catch-all route for undefined paths */}
          {/* <Route path='*' element={<Error />} /> */}
          {/* redirect to home page if undefined path occurs */}
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;