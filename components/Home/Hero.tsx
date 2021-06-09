import React from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

function Hero() {
  return (
    <div className="h-screen w-full grid grid-cols-3 grid-rows-2">
      <HeroLeft />
      <HeroRight />
    </div>
  );
}

export default Hero;
