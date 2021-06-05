import React from "react";
import HeroRightTop from "./HeroRightTop";

function HeroRight() {
  return (
    <>
      <HeroRightTop />
      <div className="col-span-1 row-span-2 flex justify-center items-center flex-col text-left">
        <div className="mx-16">
          <h4 className="text-gray-500 mb-4 font-montserrat text-xs tracking-widest font-bold">
            MAR 20, 2020 CITYBREAK
          </h4>
          <h2 className="font-playfair text-4xl font-semibold tracking-wide text-gray-800 leading-snug mb-5">
            Facts About Parks All Around the World
          </h2>
          <a href="/post" className="flex items-center text-blue-400">
            <span className="pr-2 tracking-wide uppercase border-b-2 border-dashed border-blue-500">
              Discover
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
      <img
        src="/hero-right-bottom.jpg"
        alt=""
        className="col-span-1 row-span-2 bg-cover w-full h-full"
      />
    </>
  );
}

export default HeroRight;
