import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-30 gap-5 ">
      <h1 className=" font-extrabold text-[35px] text-center mt-7">
        <span className="text-[#f56551]">
          Discover Your Next Adventure with AI:
        </span>
        Personalized Itineraries at Your Fingertips
      </h1>
      <p className="text-[17px] text-gray-500 text-center">
        Your personal trip planner and travel curator, creating custom
        itineraries tailored to your interests and budgets
      </p>
      <Link to={"/create-trip"}>
        <Button>Get Started, It's Free</Button>
      </Link>
      
      <img src="/landing.png" className="-mt-10" />
    </div>
  );
}

export default Hero;
