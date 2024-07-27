import React from "react";
import { jobMockup, bookMockup } from "../../public/image";

function Projects() {
  return (
    <div className="flex flex-col items-center mt-28 justify-center">
      <h1 className="text-4xl items-center font-poppinsBold text-baseContent">
        My Recent <span className="text-buttonColor">Work</span>
      </h1>
      <div className="mt-4 flex flex-col justify-center lg:flex-row gap-8">
        <div className=" lg:h-1/2 h-1/2 w-full px-1 py-1 lg:px-4 lg:py-4 ">
          <img
            src={jobMockup}
            alt=""
            className="rounded-lg transform hover:scale-105 transition duration-300"
          />
          <a href="/work/techlaunch" className="group">
            <div className="mt-4 flex gap-4">
              <h1 className="font-poppinsBold text-2xl py-2 text-baseContent group-hover:text-baseContentSecondary">
                Techlaunch
              </h1>
              <div className="mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-up-right transition duration-300 rounded-full border border-buttonColor text-baseContent bg-white group-hover:bg-buttonColor group-hover:text-white"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </div>
            </div>
          </a>
          <div>
            <p className="font-poppinsMedium text-lg text-baseContent">
              Job board platform, enabling student get tech jobs based on their
              schedule.
            </p>
          </div>
        </div>

        <div className=" lg:h-1/2 h-1/2 w-full px-1 py-1 lg:px-4 lg:py-4">
          <img
            src={bookMockup}
            alt=""
            className="rounded-lg object-cover transform hover:scale-105 transition duration-300"
          />
          <a href="#" className=" group">
            <div className="mt-9 flex gap-4">
              <h1 className="font-poppinsBold text-2xl py-2 text-baseContent group-hover:text-baseContentSecondary">
                BookHaven
              </h1>
              <div className="mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-up-right transition duration-300 rounded-full border border-buttonColor text-baseContent bg-white group-hover:bg-buttonColor group-hover:text-white"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </div>
            </div>
          </a>
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
