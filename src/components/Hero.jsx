import React from "react";
import hero from "../assets/fitfusion-hero.svg";
import stroke from "../assets/stroke.svg";
import mobilehero from "../assets/mobile-hero.svg";
import yoga from "../assets/yoga-hero.svg";

function Hero() {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="grid md:grid-cols-2 max-w-lg m-auto">
        <div className="flex flex-col justify-center  md:items-start w-full px-8 py-8 z-10 mt-8">
          <h1 className="text-3xl font-bold">
            A New Era of Fitness <br></br>Standards.
          </h1>
          <p className="pt-2">
            Conventional diets don’t work. Discover the
            <span className="font-bold ">
              <span className="text-purple-600"> Fit</span>
              Fusion
            </span>{" "}
            methodology to fat loss.
          </p>

          <div className="py-4 flex gap-4 pb-6">
            <button className="px-6 py-2 bg-purple-600 text-white font-bold">
              <a href="" className="hover:font-bold">
                Loose Fat
              </a>
            </button>
            <button className="border-[1.5px] border-purple-700 px-4 py-2 font-bold text-purple-700 mr-4 hover:bg-purple-700 hover:text-white pb-">
              How it works
            </button>
          </div>
        </div>
        <div className=" p-6">
          <img src={yoga} alt="" className="w-full " />
        </div>
      </div>
    </div>
    // <div className="flex flex-grow items-center 	   ">
    //   <div className="  justify-center   ">
    //     <h1 className="text-6xl font-bold	whitespace-nowrap p-4">
    //       A New Era of Fitness <br></br>Standards.
    //     </h1>
    //     <p className="p-4 text-xl leading-7">
    //       Conventional diets don’t work. <br></br> Discover the{" "}
    //       <span className="font-bold ">
    //         <span className="text-purple-600"> Fit</span>
    //         Fusion{" "}
    //       </span>{" "}
    //       methodology to fat loss.
    //     </p>{" "}
    //     <div className="flex gap-6 ml-4 pt-4">
    //       {" "}
    //       <button className="bg-purple-500 py-3 px-8 text-white font-bold text-xl">
    //         Loose Fat
    //       </button>
    //       <button className="border-2 py-2 px-5 border-purple-600 text-xl">
    //         How it Works
    //       </button>
    //     </div>
    //   </div>

    //   <div className="absolute">
    //     <img src={hero} alt="" className="h-[950px] w-[1200px] z-1" />
    //   </div>
    // </div>
  );
}

export default Hero;

// <div className="relative">
//   <img src={hero} alt="" className="h-[950px] w-[1200px] z-1" />

//   <div className="absolute   top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pl-20">
//     <h1 className="text-6xl font-bold	whitespace-nowrap p-4">
//       A New Era of Fitness <br></br>Standards.
//     </h1>

//     <div
//       className="absolute   top-[85px] left-[550px]

//             -translate-x-1/2 -translate-y-1/2 "
//     >
//       <img src={stroke} alt="" className="" />
//     </div>

//     <p className="p-4 text-xl ">
//       Conventional diets don’t work. Discover the{" "}
//       <span className="font-bold ">
//         <span className="text-purple-600"> Fit</span>
//         Fusion{" "}
//       </span>{" "}
//       methodology to fat loss.
//     </p>
//   </div>
// </div>;

// <div
//   className="absolute   top-[85px] left-[550px]

//     -translate-x-1/2 -translate-y-1/2 "
// >
//   <img src={stroke} alt="" className="" />
// </div>;
