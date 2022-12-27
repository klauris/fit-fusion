import React, { useState } from "react";
import logo from "../assets/FitFusion.svg";

function Navbar() {
  const [mobileMenuState, setMobileMenuState] = useState(false);

  const handleMobileMenuClick = () => {
    setMobileMenuState(!mobileMenuState);
  };
  return (
    <header
      className="w-screen bg-white fixed  h-16 
     z-40 drop-shadow-md "
    >
      <div className=" flex justify-between items-center max-w-[1040px] m-auto h-full md:px-4 px-2 ">
        <div className="flex  ml-4 md:ml-1 ">
          <img src={logo} alt="brand-logo" className="h-5  " />
        </div>

        <div className="">
          <ul className="hidden md:flex gap-8 ">
            <li>
              <a href=""> Home</a>
            </li>
            <li>
              <a href=""> Workouts</a>
            </li>
            <li>
              <a href="">Diets</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex">
          <button className="px-4 py-2 ">Sign In</button>
          <button className="border-[1.5px] border-purple-700 px-4 py-2 font-bold text-purple-700 mr-4 hover:bg-purple-700 hover:text-white">
            Register
          </button>
        </div>
        <div className="md:hidden mr-4" onClick={handleMobileMenuClick}>
          {!mobileMenuState ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
      </div>

      <div
        className={
          !mobileMenuState ? "hidden" : " absolute bg-white w-full px-8 text-l "
        }
      >
        <ul className="py-4">
          <li className="border-b-2 border-slate-50 w-full py-2">Workouts</li>
          <li className="border-b-2 border-slate-50 w-full py-2">Home</li>
          <li className="border-b-2 border-slate-50 w-full py-2">Diets</li>
          <li className="border-b-2 border-slate-50 w-full py-2">FAQ</li>

          <div className="flex items-center justify-end mt-4">
            <button className="px-4 py-2 ">
              <a href="" className="hover:font-bold">
                Sign In
              </a>
            </button>
            <button className="border-[1.5px] border-purple-700 px-4 py-2 font-bold text-purple-700 mr-4 hover:bg-purple-700 hover:text-white">
              Register
            </button>
          </div>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
