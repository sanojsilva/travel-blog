import React from "react";
import HeroImagebox from "./HeroImagebox";
import HeroRightTop from "./HeroRightTop";
import HeroTextbox from "./HeroTextbox";

function HeroRight() {
  return (
    <>
      <HeroRightTop />
      <div className=" col-span-2 flex items-center flex-col  bg-red-300 ">
        <div className="grid grid-cols-2 overflow-hidden">
          <HeroTextbox date="MAR 20, 2020 CITYBREAK" title="Facts About Parks All Around the World" />
          <HeroImagebox img="/hero-right-bottom.jpg" />
        </div>
        <div className="grid grid-cols-2 overflow-hidden">
          <HeroImagebox img="/hero-right-bottom.jpg" />
          <HeroTextbox date="MAR 20, 2020 CITYBREAK" title="Facts About Parks All Around the World" />
        </div>
        <div className="grid grid-cols-2 overflow-hidden">
          <HeroImagebox img="/hero-right-bottom.jpg" />
          <HeroTextbox date="MAR 20, 2020 CITYBREAK" title="Facts About Parks All Around the World" />
        </div>
      </div>
         
      
      
    </>
  );
}

export default HeroRight;
