import React from 'react';
import image from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-10">

      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={image} alt="Logo" className="w-10 h-10 object-contain" />
            <h2 className="text-xl font-bold">HERO.IO</h2>
          </div>
          <p className="text-sm">
            Build modern web applications easily with our tools and resources.
            Learn, explore, and grow your development skills.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-primary">Home</a></li>
            <li><a href="/apps" className="hover:text-primary">Apps</a></li>
            <li><a href="/installation" className="hover:text-primary">Installation</a></li>
          </ul>
        </div>

        {/* Social + Button */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Connect</h3>

          <div className="flex gap-3 mb-4">
            {/* Facebook */}
            <a className="btn btn-circle btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-7H7.9v-2.88h2.54V9.41c0-2.5 1.5-3.88 3.8-3.88 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56v1.88h2.76l-.44 2.88h-2.32v7C18.34 21.13 22 17 22 12z" />
              </svg>
            </a>

            {/* GitHub */}
            <a className="btn btn-circle btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58 0-.28-.01-1.04-.02-2.04-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.32-1.75-1.32-1.75-1.08-.74.08-.73.08-.73 1.2.08 1.82 1.23 1.82 1.23 1.06 1.82 2.78 1.3 3.46.99.1-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02 0 2.05.14 3 .4 2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.76.84 1.23 1.9 1.23 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22 0 1.6-.01 2.88-.01 3.27 0 .32.22.69.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>

          <button className="btn btn-primary btn-sm">
            Join Community
          </button>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center py-4 border-t text-sm">
        © {new Date().getFullYear()} HERO.IO — All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;