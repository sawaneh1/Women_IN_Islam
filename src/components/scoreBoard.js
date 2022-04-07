import React from "react";

const ScoreBoard = () => {
  return (
    <div className="  grid grid-cols-1 place-items-center h-full  scoreboard ">
      <div className="bg-white sm:w-1/2 border-gray-200 px-2 sm:px-4  py-2.5 rounded-3xl  p-20">
        <h2 className=" text-center text-lg text-pink-600 font-bold ">
          Hi! Sulayman , below is your test info :)
        </h2>

        <div className="flex justify-between pt-10 p-5 ">
          <h3 className="font-bold">Score : </h3>
          <h3 className="text-red-600 font-semibold "> 20% </h3>
        </div>
        <div className="flex justify-between pt-10  p-5">
          <h3 className="font-bold">Time Taken : </h3>
          <h3 className="text-pink-600 font-semibold"> 20 Min</h3>
        </div>
        <div className="flex justify-between pt-10 p-5">
          <h3 className="font-bold"> Best in : </h3>
          <h3 className="text-pink-600 font-semibold"> hadith </h3>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
