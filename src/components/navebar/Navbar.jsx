import React from 'react';
import { NavLink } from 'react-router';
import image from '../../assets/logo.png'

const Navbar = () => {

      const links = (
            <>
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/apps">Apps</NavLink></li>
                  <li><NavLink to="/installation">Installation</NavLink></li>
            </>
      );

      return (
            <div className="navbar bg-base-100 shadow-sm px-4">

                  {/* LEFT */}
                  <div className="navbar-start">

                        {/* 🔥 Mobile Menu Button */}
                        <div className="dropdown lg:hidden">
                              <div tabIndex={0} role="button" className="btn btn-ghost">
                                    {/* Hamburger Icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                          className="h-6 w-6"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                              </div>

                              {/* Dropdown Menu */}
                              <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    {links}
                              </ul>
                        </div>

                        {/* Logo */}
                        <div className="flex items-center gap-2 ml-2">
                              <img src={image} alt="Logo" className="w-10 h-10 object-contain" />
                              <h2 className="text-lg md:text-xl font-bold">HERO.IO</h2>
                        </div>

                  </div>

                  {/* CENTER (Desktop Menu) */}
                  <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                              {links}
                        </ul>
                  </div>

                  {/* RIGHT */}
                  <div className="navbar-end">
                        <button className="btn btn-primary btn-sm md:btn-md">
                              Contribute
                        </button>
                  </div>

            </div>
      );
};

export default Navbar;