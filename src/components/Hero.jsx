import React from "react";
import hero from "../assets/fitfusion-hero.svg";
import stroke from "../assets/stroke.svg";

import yoga from "../assets/yoga-hero.svg";

function Hero() {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col  md:items-start w-full  py-8 z-10  gap-2 ">
          <div className="mt-10 md:pl-6 ">
            <h1 className="text-4xl font-bold md:text-6xl ">
              A New Era of <br />{" "}
              <span className="underline underline-offset-4 decoration-4 decoration-purple-600 ">
                {" "}
                Fitness
              </span>{" "}
              Standards
            </h1>
            <p className="pt-2 md:text-xl md:pt-4 text-gray-700">
              Conventional diets don’t work. Discover the <br></br>
              <span className="font-bold ">
                <span className="text-purple-600"> Fit</span>
                Fusion
              </span>{" "}
              methodology to fat loss.
            </p>

            <div className="mt-8">
              <div className="mt-4 flex  gap-4 pb-6 ">
                <button className="px-8 py-3 bg-purple-600 hover:bg-purple-500  text-white font-bold">
                  Start Now{" "}
                </button>

                <div className="flex items-center hover:text-gray-500 ">
                  <button className=" font-bold ">How it works</button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" p-6 md:flex items-center">
          <img src={yoga} alt="" className="w-full md:h-2/3 " />
        </div>
      </div>
    </div>
  );
}

export default Hero;
