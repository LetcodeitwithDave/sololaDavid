import React from "react";
import Nav from "../sections/Nav";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Skill from "../sections/Skill";
import Reachout from "../sections/Reachout";

function Home() {
  return (
    <div>
      <div className="mx-6 lg:mx-14">
        <section>
          <Nav />
        </section>

        <section>
          <Hero />
        </section>

        <section className=" mb-5">
          <About />
        </section>

        <section className=" mb-5">
          <Projects />
        </section>

        <section className=" mb-5">
          <Skill />
        </section>
      </div>

      <section className=" bg-buttonColor w-full">
        <Reachout />
      </section>
    </div>
  );
}

export default Home;
