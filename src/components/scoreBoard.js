import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./scoreboard.css";
import logo from "../assests/test1.svg";
import Head from "../Navbar/Head";
import Footer from "./Footer";
import { useSelector } from "react-redux";

const ScoreBoard = () => {
  const user = useSelector((state) => state.user);
  console.log("user", user);
  return (
    <div className="bg-dark">
      <div className="flex  text-white justify-between px-5 mt-5 mb-5 sm:mt-3 sm:mb-2">
        <Link to="/">
          <Head />
        </Link>

        {/* <Link to="/" className="mt-5">
          <span className="font-extrabold  bg-yellow-600  rounded-xl p-2  items-center text-lg text-gray-100 cursor-pointer">
            Home
          </span>
         */}
      </div>
      <div>
        <p className="text-gray-100 text-center ">
          <Link to="/">
            Go back...{" "}
            <span className="bg-yellow-700 rounded-lg text-white  px-3 py-2">
              Home
            </span>
          </Link>
        </p>
      </div>

      <div className="  grid  place-items-center   scoreboard">
        <div>
          <h2 className=" text-center text-lg  -mt-5 mb-5 text-gray-200 font-bold ">
            Hi! <span className="text-yellow-700 font-bold">{user.name}</span>{" "}
            below is your test info :)
          </h2>
          <div className="bg-scoreboard text-gray-300  border-gray-200 px-2 sm:px-4  py-2.5 rounded-3xl">
            <h3 className="text-center font-bold"> Your score board</h3>
            <div className="flex justify-between pt-10 p-5 ">
              <h3 className="font-bold">Score : </h3>
              <h3 className="text-yellow-600 font-semibold ">
                {" "}
                {user.score}%{" "}
              </h3>
            </div>
            <div className="flex justify-between pt-10  p-5">
              <h3 className="font-bold">Time Taken : </h3>
              <h3 className="text-yellow-600 font-semibold">10 Min</h3>
            </div>
            <div className="flex justify-between pt-10 p-5">
              <h3 className="font-bold"> Best in : </h3>
              <h3 className="text-yellow-600 font-semibold"> hadith </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
