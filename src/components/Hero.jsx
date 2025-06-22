import React from "react";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants/index";
import profilePic from "../assets/ProfilePic.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="border-b border-neutral-900 pb-16 lg:pb-24 overflow-hidden"
    >
      <div className="mx-auto max-w-screen-xl flex flex-col-reverse lg:flex-row items-center px-4 sm:px-6 lg:px-8 gap-10">
        {/* Left Section - Text */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-thin tracking-tight pb-4 leading-tight">
              Anirudh Mishra
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-3xl lg:text-4xl font-medium text-transparent">
              Full Stack Developer
            </span>
            <p className="mt-6 max-w-xl font-light tracking-tight text-base sm:text-lg leading-relaxed">
              {HERO_CONTENT}
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-medium transition duration-300"
            >
              Contact
            </a>
          </div>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.04 }}
          transition={{
            duration: 1,
            hover: { duration: 0.3 },
          }}
        >
          <img
            src={profilePic}
            alt="Anirudh Mishra"
            className="rounded-full w-full max-w-[22rem] sm:max-w-[24rem] lg:max-w-[26rem] h-auto object-cover shadow-xl border-4 border-neutral-800"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
