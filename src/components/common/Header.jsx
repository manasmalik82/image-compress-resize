import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-300 transition-colors">
            Image Tools
          </Link>
        </div>
        <nav className="flex space-x-6">
          <Link to="/" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link to="/compress" className="hover:text-gray-300 transition-colors">
            Compress
          </Link>
          <Link to="/resize" className="hover:text-gray-300 transition-colors">
            Resize
          </Link>
          <Link to="/crop" className="hover:text-gray-300 transition-colors">
            Crop
          </Link>
          <Link to="/about" className="hover:text-gray-300 transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;