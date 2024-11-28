import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="bg-black text-gray-400 mt-3">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        
        <h1 className="text-3xl font-bold primary-color">eduVoie</h1>
      
        <ul className="hidden md:flex space-x-4">
          <li><a href="/" className="text-lg">Home</a></li>
          <li><a href="#about" className="text-lg">About</a></li>
          <li><a href="#course" className="text-lg">Courses</a></li>
          <li><a href="#blog" className="text-lg">Blog</a></li>
          <li><a href="#contact" className="text-lg">Contact</a></li>
          <li><a href="/" className="text-lg text-center px-6 py-1 block w-full rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white">Join</a></li>
          <li><a href="/" className="text-lg text-center px-6 py-1 block w-full rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white">Free Trial</a></li>
        </ul>
        
        <div className="md:hidden">
          <button onClick={handleNavToggle} className="text-3xl text-gray-400 focus:outline-none">
            {navOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>
      
      {navOpen && (
        <div className="bg-black text-gray-400 md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><a href="/" className="text-lg">Home</a></li>
            <li><a href="#about" className="text-lg">About</a></li>
            <li><a href="#course" className="text-lg">Course</a></li>
            <li><a href="#blog" className="text-lg">Blog</a></li>
            <li><a href="#contact" className="text-lg">Contact</a></li>
            <li><a href="/" className="text-lg text-center px-6 py-1 block w-full rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white">Join</a></li>
            <li><a href="/" className="text-lg text-center px-6 py-1 block w-full rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white">Free Trial</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
