import React from "react";
import Nav from "../sections/Nav";

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
    </div>
  );
}

export default Work;
