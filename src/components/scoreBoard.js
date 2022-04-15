import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./scoreboard.css";
import logo from "../assests/new.jpg";

const ScoreBoard = () => {
  return (
    <div>
      <div className="flex  text-white justify-between px-5 mt-5 mb-5 sm:mt-3 sm:mb-2">
        <Link to="/">
          <span className="font-extrabold gap-2 items-center flex text-3xl text-gray-900">
            <img src={logo} height="60" width="60" className="rounded-lg" />{" "}
            <span>Ul-Nisa</span>
          </span>
        </Link>

        <Link to="/quiz">
          <span className="font-extrabold  bg-black  rounded-xl p-2  items-center text-xl text-gray-100 cursor-pointer">
            Retake
          </span>
        </Link>
      </div>

      <div className="  grid  place-items-center   scoreboard">
        <div>
          <h2 className=" text-center text-lg  -mt-20 mb-10 text-gray-200 font-bold ">
            Hi! <span className="text-neutral-900">Sulayman</span> below is your
            test info :)
          </h2>
          <div className="bg-scoreboard text-gray-300  border-gray-200 px-2 sm:px-4  py-2.5 rounded-3xl">
            <h3 className="text-center font-bold"> Your score board</h3>
            <div className="flex justify-between pt-10 p-5 ">
              <h3 className="font-bold">Score : </h3>
              <h3 className="text-red-600 font-semibold "> 20% </h3>
            </div>
            <div className="flex justify-between pt-10  p-5">
              <h3 className="font-bold">Time Taken : </h3>
              <h3 className="text-pink-600 font-semibold">10 Min</h3>
            </div>
            <div className="flex justify-between pt-10 p-5">
              <h3 className="font-bold"> Best in : </h3>
              <h3 className="text-pink-600 font-semibold"> hadith </h3>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <h3 className="font-bold text-gray-900 italic  text-xl text-center">
          &copy; SawanehTech LTD 2022.
        </h3>
      </footer>
    </div>
  );
};

export default ScoreBoard;
