import React from "react";
import image from "../../public/image/image2.png";

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row mt-36 bg-white items-center ">
      <div className="text-left lg:w-1/2">
        <div className="text-lg text-baseContentSecondary font-poppinsRegular">
          Hey, I'm David 👋🏻
        </div>
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2 text-baseContent font-poppinsBold lg:max-w-lg">
          <span className="text-buttonColor">Full</span>stack Developer
        </div>
        <div className="text-baseContentSecondary text-lg mt-4 font-poppinsRegular max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          I'm a fullstack developer based in Nigeria, and I'll help you build
          seamless and dynamic web applications that your users will love.
        </div>
        <div className="flex space-x-4 mt-4">
          <button className="bg-buttonColor text-sm text-white px-4 py-2 font-poppinsSemiBold hover:bg-purple-700 rounded-md">
            Get in Touch
          </button>
          <button className="bg-white text-baseContent text-sm border border-baseContent hover:text-white transition duration-200 px-4 py-2 font-poppinsSemiBold hover:bg-baseContent rounded-md">
            Browse Projects
          </button>
        </div>
      </div>
      <div className="relative border lg:border-gray-400 h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 mx-auto mt-8 lg:mt-0 rounded-full">
        <img
          src={image}
          alt="Hero"
          className="p-8 rounded-full absolute inset-0 object-cover"
        />
      </div>
    </div>
  );
}

export default Hero;
