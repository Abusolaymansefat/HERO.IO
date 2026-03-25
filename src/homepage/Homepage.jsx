import React from 'react';
import Navbar from '../components/navebar/Navbar';
import Footer from '../components/navebar/Footer';
import HeroSection from '../components/navebar/HeroSection';
import Home from '../components/pages/Home';

const Homepage = () => {
      return (
            <div>
                 
                  <HeroSection/>
                  <Home/>
                  
            </div>
      );
};

export default Homepage;