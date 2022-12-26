import React from "react";
import hero from "../assets/fitfusion-hero.svg";
import stroke from "../assets/stroke.svg";

import yoga from "../assets/yoga-hero.svg";

function Hero() {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex flex-col md:flex-row max-w-xl m-auto  ">
        <div className="flex flex-col justify-center  md:items-start w-full px-8 py-8 z-10 mt-8 gap-2">
          <div>
            {" "}
            <h1 className="text-3xl font-bold">
              A New Era of{" "}
              <span className="underline underline-offset-4 decoration-purple-600 	">
                {" "}
                Fitness
              </span>{" "}
              <br></br>
              Standards.
            </h1>
            <p className="pt-2">
              Conventional diets don’t work. Discover the
              <span className="font-bold ">
                <span className="text-purple-600"> Fit</span>
                Fusion
              </span>{" "}
              methodology to fat loss.
            </p>
          </div>

          <div className="py-4 flex gap-4 pb-6">
            <button className="px-6 py-2 bg-purple-600 text-white font-bold">
              <a href="" className="hover:font-bold">
                Loose Fat
              </a>
            </button>
            <button className="border-[1.5px] border-purple-700 px-4 py-2 font-bold text-purple-700 mr-4 ">
              How it works
            </button>
          </div>
          <div className=" p-6">
            <img src={yoga} alt="" className="w-full " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
