import React from "react";
import { jobproject, bookproject } from "../../public/image";

function Projects() {
  return (
    <div className="flex flex-col items-center mt-28 justify-center">
      <h1 className="text-4xl items-center font-poppinsBold text-baseContent">
        My Recent <span className="text-buttonColor">Work</span>
      </h1>
      <div className="mt-4 flex flex-col justify-center lg:flex-row gap-8">
        <div className="lg:w-1/2 lg:h-1/2 h-1/2 w-full px-1 py-1 lg:px-4 lg:py-4 ">
          <div className="px-5 py-5 md:px-8 md:py-8 lg:px-9 lg:py-6 bg-purple-500 rounded-lg hover:bg-purple-600 transition duration-300">
            <img
              src={jobproject}
              alt=""
              className="rounded-lg transform hover:scale-105 transition duration-300"
            />
          </div>

          <div className="mt-4">
            <h1 className="font-poppinsSemiBold text-2xl py-2 text-baseContent">
              Techlaunch
            </h1>
          </div>
          <div>
            <p className="font-poppinsMedium text-lg text-baseContent">
              Job board platform, enabling student get tech jobs based on their
              schedule.
            </p>
          </div>
        </div>

        <div className="lg:w-[53%] lg:h-1/2 h-1/2 w-full px-1 py-1 lg:px-4 lg:py-4">
          <div className="px-5 py-5 md:px-8 md:py-8 lg:px-9 lg:py-6 bg-purple-500 rounded-lg hover:bg-purple-600 transition duration-300">
            <img
              src={bookproject}
              alt=""
              className="rounded-lg object-cover transform hover:scale-105 transition duration-300"
            />
          </div>

          <div className="mt-9">
            <h1 className="font-poppinsSemiBold text-2xl py-2 text-baseContent">
              BookHaven
            </h1>
          </div>
          <div>
            <p className="font-poppinsMedium text-lg text-baseContent">
              E-commerce platform promoting eco-friendly books.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
