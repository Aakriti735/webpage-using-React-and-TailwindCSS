import React from "react";
import "../Work/Work.css";
import { Outlet } from "react-router-dom";

function Work() {
  return (
    <div className="bg-white">
      <div className="working flex justify-center flex-col">
        <h1 className="text-3xl ml-160">HOW IT WORKS</h1>
        <p className="text-xl mt-10 ml-145">
          Learn More about how our website works
        </p>
      </div>
      <div className="features flex mt-5">
        <div className="feature1 border border-indigo-600 ml-10 mr-15 h-120 w-120">
          <i class="fa-regular fa-lightbulb text-4xl ml-50 mt-10 h-30 w-30 "></i>
          <h3 className="text-2xl ml-30 mt-5 ">Choose what to Do</h3>
          <p className="text-md ml-18 mr-10 mt-7">
            Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do
            eiusmod tempor incididunt ut laboremagna aliqua.
          </p>
          <button className="text-xl ml-35 mt-5 border border-indigo-600 p-4">
            AutoCad
          </button>
        </div>
        <div className="feature1 border border-indigo-600 mr-15 h-120 w-120">
          <i class="fa-solid fa-car text-4xl ml-55 mt-10 h-30 w-30 "></i>
          <h3 className="text-2xl ml-30 mt-5">choose what to do</h3>
          <p className="text-md ml-18 mr-10 mt-7">
            Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do
            eiusmod tempor incididunt ut laboremagna aliqua.
          </p>
          <button className="text-xl ml-35 mt-5 border border-indigo-600 p-4">
            Figma
          </button>
        </div>
        <div className="feature1 border border-indigo-600 h-120 w-120 mr-15">
          <i class="fa-solid fa-location-dot text-4xl ml-55 mt-10 h-30 w-30 "></i>
          <h3 className="text-2xl ml-30 mt-5">choose what to do</h3>
          <p className="text-md ml-18 mr-10 mt-7">
            Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do
            eiusmod tempor incididunt ut laboremagna aliqua.
          </p>
          <button className="text-xl ml-35 mt-5 border border-indigo-600 p-4">
            Webdev
          </button>
        </div>
      </div>
    </div>
  );
}

export default Work;
