import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <motion.nav
      className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between py-6 mb-12"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo */}
      <div className="flex items-center mb-4 sm:mb-0">
        <img src={logo} alt="logo" className="w-10 h-10" />
      </div>

      {/* Social Icons */}
      <motion.div
        className="flex items-center justify-center gap-6 text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <motion.a
          href="https://www.linkedin.com/in/anirudh-mishra-b84363256/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://github.com/anirudhxmishra"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/anirudhxmishra/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaInstagram />
        </motion.a>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
