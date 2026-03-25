import React from 'react';
import Navbar from '../components/navebar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/navebar/Footer';

const MainLayout = () => {
      return (
            <div>
                  <Navbar/>
                  <Outlet/>
                  <Footer/>
            </div>
      );
};

export default MainLayout;