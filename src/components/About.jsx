import React from "react";
import about from '../../public/image/About.jpg'

function About() {
  return (
    <div className="flex flex-col items-center mt-20 justify-center sm:px-16 md:px-28    lg:px-8">
      <h1 className="text-baseContent text-4xl font-poppinsBold">
        About <span className="text-buttonColor">me</span>
      </h1>

      <div className="flex gap-12 flex-col lg:flex-row items-center lg:mt-20 mt-16 sm:mt-6 md:mt-20 max-w-5xl  lg:max-w-6xl">
        <img 
          src={about} 
          alt="about me image" 
          className="w-full  lg:w-1/2 h-auto rounded-xl shadow-lg  sm:mb-0 "
        />

        <div className="flex flex-col mt-0   px-4 lg:px-0  max-w-xl ">
          <h2 className="text-baseContent text-center lg:text-left lg:text-3xl text-2xl md:text-3xl font-poppinsSemiBold">
            Hello! I'm <span className=" text-buttonColor">Solola David.</span>
          </h2>
          <p className="font-poppinsMedium mt-2 text-baseContentSecondary  lg:text-lg  text-md ">
            I specialize in creating dynamic and beautiful web applications. With a background in building and delivering high-quality projects, I have honed my skills in fullstack development. 
            <br />
            When I’m not on my computer, building or exploring new web experiences, I'm probably playing chess or listening to self-improvement podcasts. 
            <br />
            I'm fully committed to creating aesthetically beautiful, responsive, and usable products. <br />Feel free to browse my projects and get in touch if you'd like to collaborate!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
