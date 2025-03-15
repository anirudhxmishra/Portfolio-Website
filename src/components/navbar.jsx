import React from 'react';
import logo from "../assets/logo.png";  // Ensure the correct relative path
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <img src={logo} alt="logo" className="mx-2 w-10" /> {/* Add size styles if needed */}
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
