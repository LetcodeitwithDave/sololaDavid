import React from "react";

import { Nav, Hero, About, Projects, Skill, Reachout } from "../sections";

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
