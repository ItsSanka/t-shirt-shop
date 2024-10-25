import React from "react";
import { assets } from "../Assets/images";

function Hero() {
  return (
    <>
      <div className="row hero lg:pt-10 min-[320px]:pt-4">
        <div className="col-lg-6 col-md-6 col-xs-12 heading flex flex-col justify-center gap-3">
          <h1 className="text-blue-950 font-bold 2xl:text-7xl xl:text-6xl lg:text-4xl min-[320px]:text-4xl">
            Discover Style
          </h1>
          <h2 className="text-blue-950 font-bold 2xl:text-5xl xl:text-4xl lg:text-4xl ctext-3xl">
            Collections, Trends
          </h2>
          <p className="text-black-500 text-lg font-medium xl:w-4/5 min-[320px]:w-full">
            A team of designers that make dreams come true
          </p>
          <div className="links flex gap-3 my-4">
            <button
              type="button"
              href="#"
              className="rounded-full text-blue-900 border-2 border-blue-900 py-2 px-6 font-normal flex flex-row items-center gap-2 hover:ease-in-out duration-500 hover:scale-105"
            >
              View Intro <img src={assets.play} alt="play" />
            </button>
            <button
              type="button"
              href="#"
              className="rounded-full text-white bg-blue-950 py-2 px-6 font-normal hover:ease-in-out duration-500 hover:bg-black hover:scale-105"
            >
              Explore Now
            </button>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-xs-12 image">
          <img src={assets.boy} alt="shirt" />
        </div>
      </div>
    </>
  );
}

export default Hero;
