import React from 'react';
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (

      <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] mx-auto py-8 bg-black' id="hero">

        <div className='sm:col-span-2 my-auto mx-auto px-5 text-center sm:text-left mt-7'>

          <h1 className="text-white text-3xl sm:text-5xl lg:text-7xl font-extrabold whitespace-nowrap">
            <span className="primary-color">
              Welcome to eduVoie
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Interactive Learning",
                1000,
                "Specialised Training",
                1000,
                "Diverse Courses",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-3xl md:text-6xl"
            />
          </h1>

          <p className="text-white text-base sm:text-lg my-6">
            Learn From The Expert
          </p>

          <div className='flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4 my-6'>
            <a href="/" className="px-6 py-3 w-full sm:w-auto rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white text-center">
              View Courses
            </a>
            <a href="/" className="px-6 py-3 w-full sm:w-auto rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white text-center">
              Career Guide
            </a>
          </div>

        </div>

        <div className='hidden sm:block'></div>

    </div>
  );
};

export default Hero;

