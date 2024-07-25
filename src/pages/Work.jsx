import React from "react";
import Nav from "../sections/Nav";
import { jobproject, bookproject } from "../../public/image";

function Work() {
  return (
    <div className=" mx-6 lg:mx-14">
      <Nav />

      <div className=" mt-28 text-7xl max-w-4xl font-poppinsBold text-baseContent">
        My <span className=" text-buttonColor">Best</span> Creations
      </div>
      <p className=" text-xl mt-4 font-poppinsMedium text-baseContentSecondary">
        Designing and Developing Robust and Stylish Web Applications
      </p>

      <div className="mt-12 flex flex-col justify-center ">
        <a href="/work/techlaunch">
          <div className="h-full w-full px-1 py-1 lg:px-28 lg:py-4 ">
            <div className="px-5 py-5 md:px-8 md:py-8 lg:px-9 lg:py-6  bg-purple-500 rounded-lg hover:bg-purple-600 transition duration-300">
              <img
                src={jobproject}
                alt=""
                className="rounded-lg transform hover:scale-105 transition duration-300"
              />
            </div>

            <div className="mt-4">
              <h1 className="font-poppinsBold text-3xl md:text-4xl lg:text-5xl py-2 text-baseContent">
                Techlaunch
              </h1>
            </div>
            <div>
              <p className="font-poppinsMedium text-lg text-baseContent">
                Job board platform, enabling student get tech jobs based on
                their schedule.
              </p>
            </div>
          </div>
        </a>
        <a href="">
          <div className="h-full mt-12 w-full px-1 py-1 lg:px-28 lg:py-4">
            <div className="px-5 py-5 md:px-8 md:py-8 lg:px-9 lg:py-6 bg-purple-500 rounded-lg hover:bg-purple-600 transition duration-300">
              <img
                src={bookproject}
                alt=""
                className="rounded-lg object-cover transform hover:scale-105 transition duration-300"
              />
            </div>

            <div className="mt-9">
              <h1 className="font-poppinsBold md:text-4xl  text-5xl py-2 text-baseContent">
                BookHaven
              </h1>
            </div>
            <div>
              <p className="font-poppinsMedium text-lg text-baseContent">
                E-commerce platform promoting eco-friendly books.
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Work;
