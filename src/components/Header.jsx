import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/image/xyzg.jpg" alt="Logo" className="h-10 w-10" />
            <h1 className="text-3xl font-bold">XYZ Organization</h1>
          </Link>
        </div>
        <nav className="flex space-x-6">
          <Link to="/" className="hover:text-gray-300 transition">Home</Link>
          <Link to="/" onClick={() => document.getElementById('tournaments').scrollIntoView({ behavior: 'smooth' })} className="hover:text-gray-300 transition">Tournaments</Link>
          <Link to="/" onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })} className="hover:text-gray-300 transition">Gallery</Link>
          <Link to="/" onClick={() => document.getElementById('blogs').scrollIntoView({ behavior: 'smooth' })} className="hover:text-gray-300 transition">Match Highlights</Link>
          <Link to="/" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} className="hover:text-gray-300 transition">About Us</Link>
          <Link to="/" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="hover:text-gray-300 transition">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
