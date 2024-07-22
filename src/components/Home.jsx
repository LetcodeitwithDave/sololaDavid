import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";

function Home() {
  return (
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
        <Projects  />
      </section>
    </div>
  );
}

export default Home;
