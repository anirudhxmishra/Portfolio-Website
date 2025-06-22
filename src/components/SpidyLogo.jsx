// src/components/SpideyLogo.jsx
import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const SpideyLogo = () => {
  const handleClick = () => {
    if (navigator.vibrate) {
      navigator.vibrate(200); // Vibrate for 200ms on supported devices
    }
  };

  return (
    <motion.div
      className="flex items-center cursor-pointer"
      whileHover={{
        rotate: [0, -10, 10, -5, 5, 0],
        scale: 1.2,
      }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 300,
      }}
      title="Spidey senses tingling!"
    >
      <img src={logo} alt="Spidey Logo" className="w-10 h-10" />
    </motion.div>
  );
};

export default SpideyLogo;
