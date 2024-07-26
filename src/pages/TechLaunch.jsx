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
          <div className="h-1/2 w-full  ">
            <div>
              <img
                src={jobMockup}
                alt=""
                className=" rounded-md transform hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>

        <div className=" flex flex-col md:flex-row mt-8 md:space-x-8">
          {/* card w-full h-full md:w-1/3 md:h-1/3*/}
          <div className=" w-full  md:w-1/4 lg:w-1/2 h-1/4 md:gap-2 border-2 grid sm:grid-cols-1 lg:grid-cols-2 border-buttonColor shadow-xl  px-2 py-2 rounded-md ">
            <div>
              <span className=" text-baseContentSecondary text-sm font-poppinsMedium">
                client
              </span>
              <br />
              <span className="text-baseContent text-lg font-poppinsSemiBold">
                ---
              </span>
            </div>

            <div>
              <span className=" font-poppinsMedium text-sm  text-baseContentSecondary">
                Year
              </span>
              <br />
              <span className=" text-baseContent text-lg font-poppinsSemiBold">
                2024
              </span>
            </div>

            <div className=" ">
              <span className=" font-poppinsMedium text-sm  text-baseContentSecondary">
                My Role
              </span>
              <br />
              <span className=" text-baseContent text-lg font-poppinsSemiBold ">
                Fullstack Developer
              </span>
            </div>
          </div>

          {/* about */}
          <div className="w-full md:max-w-2xl lg:max-w-4xl">
            <div className=" text-5xl md:text-6xl mt-8 md:mt-0  font-poppinsBold text-baseContent">
              About
            </div>
            {/* text-xl */}
            <div className=" text-baseContent font-poppinsMedium mt-6 text-lg md:text-xl">
              <p>
                Techlaunch is a modern job board platform designed specifically
                for students pursuing careers in the tech industry. The platform
                is built to bridge the gap between students and potential
                employers by providing a user-friendly interface that allows
                students to find job opportunities that fit their schedules and
                skill sets.
              </p>
              <br />
              <p>
                The primary goal of Techlaunch is to simplify the job search
                process for students by offering a comprehensive database of job
                listings from reputable tech companies to ensure that users can
                efficiently find and apply for positions that match their career
                goals.
              </p>
            </div>

            <div className=" text-5xl md:text-6xl mt-8 md:mt-14  font-poppinsBold text-baseContent">
              Challenges
            </div>
            {/* text-xl */}
            <div className=" text-baseContent font-poppinsMedium mt-6 text-lg md:text-xl">
              <p>
                Many students pursuing careers in the tech industry face
                significant challenges when searching for job opportunities. The
                primary issue lies in the overwhelming number of job postings
                scattered across various platforms and many job boards are not
                tailored to the unique needs of students. This leads to
                frustration and missed opportunities.
              </p>
              <br />
              <p>
                Techlaunch was created to address these challenges by providing
                a streamlined, student-focused platform that simplifies the job
                search process and connects students with suitable job
                opportunities in the tech industry.
              </p>
            </div>

            <div className=" text-5xl md:text-6xl mt-8 md:mt-14  font-poppinsBold text-baseContent">
              Results
            </div>
            {/* text-xl */}
            <div className=" text-baseContent font-poppinsMedium mt-6 text-lg md:text-xl">
              <p>
                Techlaunch successfully streamlined the job search process for
                tech students by providing a centralized platform with advanced
                filtering and tracking features. It helped students find
                relevant job opportunities more efficiently and improved their
                chances of securing positions that matched their skills and
                schedules.
              </p>
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
