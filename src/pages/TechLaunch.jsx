import React from "react";
import { Nav, Reachout } from "../sections";
import { jobMockup, bookMockup } from "../../public/image";

function TechLaunch() {
  return (
    <div>
      <div className=" mx-6 lg:mx-14">
        <div>
          <Nav />
        </div>
        <div className=" mt-24 flex">
          <h1 className=" text-5xl lg:text-6xl font-poppinsBold text-baseContent">
            TechLaunch
          </h1>
          <div className=" bg-buttonColor rounded-full mt-[28px] lg:mt-[38px] ml-[0.5px]  h-4 w-4"></div>
        </div>

        <div>
          <p className="font-poppinsMedium text-2xl  text-baseContent">
            Job board platform, enabling student get tech jobs based on their
            schedule.
          </p>
        </div>

        <div className="mt-12 flex flex-col justify-center ">
          <div className="h-1/2 w-full  lg:px-28 lg:py-4 ">
            <div>
              <img
                src={jobMockup}
                alt=""
                className=" rounded-md transform hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-buttonColor">
        <Reachout />
      </div>
    </div>
  );
}

export default TechLaunch;
