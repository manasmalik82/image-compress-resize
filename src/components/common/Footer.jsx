import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold">Image Tools</h3>
            <p className="text-sm mt-2">
              Optimize your images with ease. Fast, free, and reliable.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Links</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/compress" className="hover:text-white transition-colors">
                  Compress
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Support</h3>
            <p className="text-sm mt-2">
              <a href="mailto:support@imagetools.com" className="hover:text-white transition-colors">
                support@coderhelp.online
              </a>
            </p>
          </div>
        </div>
        <div className="mt-6 text-center text-sm border-t border-gray-700 pt-4">
          © {currentYear} Image Tools. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;