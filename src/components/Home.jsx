import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";

function Home() {
  return (
    <div>
      <section>
        <Nav />
      </section>

      <section>
        <Hero />
      </section>
    </div>
  );
}

export default Home;
