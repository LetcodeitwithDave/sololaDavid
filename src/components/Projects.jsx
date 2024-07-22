import React from "react";
import jobproject from "../../public/image/jobproject.png";

function Projects() {
  return (
    <div className=" flex flex-col items-center mt-28 justify-center">
      <h1 className=" text-4xl items-center font-poppinsBold text-baseContent">
        Selected Projects
      </h1>
      <div className=" mt-4 flex gap-8">
        <div className=" w-1/2 h-1/2 px-4 py-4  ">
          <div className="px-9 py-6  bg-purple-500 rounded-lg">
            <img src={jobproject} alt="" className=" rounded-lg" />
          </div>

          <div className=" mt-4">
            <h1 className=" font-poppinsSemiBold  text-2xl py-2">Techlaunch</h1>
          </div>
        </div>

        <div className=" w-1/2 h-96 border rounded-lg shadow-lg border-gray-300 bg-white ">
          <div className="px-4 py-4  bg-gray-300">
            <img src={jobproject} alt="" className=" rounded-lg" />
          </div>
        </div>
        {/* <div className=' w-72 h-72 border shadow-lg border-gray-300 bg-white'>

        </div> */}
      </div>
    </div>
  );
}

export default Projects;
