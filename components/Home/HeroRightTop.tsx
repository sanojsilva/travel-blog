import React from "react";

function HeroRightTop() {
  return (
    <div
      className="col-span-2 bg-cover bg-center flex flex-col justify-center items-center row-span-2 relative"
      style={{
        backgroundImage: "url(/hero-right.jpg)",
      }}
    >
      <div className="text-center">
        <h3 className="uppercase font-montserrat text-sm tracking-widest font-bold text-gray-700">
          Welcome to Behold
        </h3>
        <h1
          className="font-playfair text-7xl font-semibold tracking-wide pt-3 bg-cover bg-clip-text text-transparent"
          style={{
            backgroundImage: "url(/hero-text-bg.jpg)",
          }}
        >
          Travels <span className="font-playfair italic">Worth</span> Retelling
        </h1>
        <p className="text-xl pt-3 max-w-3xl font-dosis leading-loose text-gray-700 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus
          tristique augue, rhoncus aliquam ipsum. Donec id dolor a neque.
        </p>
      </div>
      <div className="flex items-center justify-center flex-col absolute bottom-0 py-3 px-2 rounded-full border-2 border-gray-300 mb-4 text-gray-500 animate-bounce">
        <span className="uppercase text-xs">Scroll</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
}

export default HeroRightTop;
