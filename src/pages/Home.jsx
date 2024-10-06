import React from "react";
import Destinations from "./Destination";
import Crew from "./Crew";
import Technology from "./Technology"
const Home = () => {
  return (
    <main className="home">
      <div className="hero-text">
        <h5 className="heading-5">So, you want to travel to</h5>
        <h1 className="heading-1">Space</h1>
        <p className="text-8xl">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <a href="/destination" className="hero-btn">
        EXPLORE
      </a>
      <Destinations />
      <Crew/>
      <Technology/>
    </main>
  );
};

export default Home;
