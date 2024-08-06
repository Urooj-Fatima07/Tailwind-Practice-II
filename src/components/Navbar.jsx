// src/components/Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-pink-50 text-yellow-500 p-4 shadow-md px-16 w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" text-yellow-500 text-2xl font-bold">MyBrand</div>
        <button
          onClick={toggleMenu}
          className=" text-yellow-500 lg:hidden focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <div className={`lg:flex lg:items-center lg:space-x-6 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
          <a href="#home" className=" text-yellow-500 hover:text-gray-900">Home</a>
          <a href="#about" className=" text-yellow-500 hover:text-gray-900">About</a>
          <a href="#services" className=" text-yellow-500 hover:text-gray-900">Services</a>
          <a href="#contact" className=" text-yellow-500 hover:text-gray-900">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
