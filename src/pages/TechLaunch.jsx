import React from "react";
import { Nav, Reachout } from "../sections";

function TechLaunch() {
  return (
    <div>
      <div className=" mx-6 lg:mx-14">
        <div>
          <Nav />
        </div>
        <div className=" mt-24 flex">
          <h1 className=" text-6xl font-poppinsBold text-baseContent">
            TechLaunch
          </h1>
          <div className=" bg-buttonColor rounded-full mt-[38px] ml-[0.5px]  h-4 w-4"></div>
        </div>

        <div>
          <p className="font-poppinsMedium text-2xl  text-baseContent">
            Job board platform, enabling student get tech jobs based on their
            schedule.
          </p>
        </div>
      </div>
      <div className=" bg-buttonColor">
        <Reachout />
      </div>
    </div>
  );
}

export default TechLaunch;
