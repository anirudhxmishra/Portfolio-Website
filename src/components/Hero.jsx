import React from "react";
import { HERO_CONTENT } from "../constants/index";
import profilePic from "../assets/ProfilePic.png"; 

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-8 lg:mb-36">
      <div className="flex flex-wrap items-center">

        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="pb-6 text-5xl lg:text-7xl font-thin tracking-tight">
              Anirudh Mishra
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl lg:text-4xl font-medium text-transparent">
              Full Stack Developer
            </span>

            <p className="mt-4 max-w-xl py-6 font-light tracking-tight text-lg">
              {HERO_CONTENT}
            </p>
          </div>
        </div>

        {/* Right Section - Profile Image */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              src={profilePic}
              alt="Anirudh Mishra"
              className="rounded-full w-[26rem] h-[26rem] object-cover shadow-xl border-4 border-neutral-800"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
