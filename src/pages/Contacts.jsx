import React from "react";
import Nav from "../sections/Nav";
import { profile } from "../../public/image";

function Contacts() {
  return (
    <div className=" mx-6 lg:mx-14">
      <Nav />
      <div className="flex flex-col lg:flex-row mt-36 bg-white items-center ">
        <div className="text-left lg:w-1/2">
          <div className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl mt-2 text-baseContent font-poppinsBold lg:max-w-lg">
            Get In <span className="text-buttonColor">Touch</span>
          </div>
          <div className="text-baseContentSecondary text-lg mt-4 font-poppinsRegular max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            Looking to partner or work together? Reach out through the form and
            I'll get back to you as soon as possible.
          </div>
          <div className=" flex  gap-8 mt-8 mb-4">
            {/* email svg */}
            <a href="mailto:sololadavid4@gmail.com" target="_blank">
              <div className=" p-4 rounded-full border hover:text-buttonColor hover:bg-white  text-white bg-buttonColor transition duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
            </a>

            {/* linkedin svg */}
            <a
              href="https://www.linkedin.com/in/david-solola-4773a1291/"
              target="_blank"
            >
              <div className=" border p-4 rounded-full  hover:text-buttonColor hover:bg-white  text-white bg-buttonColor  transition duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
            </a>

            {/* twitter svg */}
            <a href="https://x.com/Tech_Dave4" target=" _blank">
              <div className=" border p-4 rounded-full  hover:text-buttonColor hover:bg-white  text-white bg-buttonColor transition duration-200">
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
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div className="relative border lg:border-gray-400 h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 mx-auto mt-8 lg:mt-0 rounded-full">
          <img
            src={profile}
            alt="Hero"
            className="p-8 rounded-full absolute inset-0 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Contacts;
