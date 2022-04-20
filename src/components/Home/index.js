import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center h-full place-items-center place-content-center justify-items-center m-auto">
      <p className="header-text text-4xl p-5 font font-bold text-white text-center mt-16">
        A group of <span className="text-yellow-500"> aspiring</span> sisters
        aiming to <span className="text-yellow-500">help </span> others in{" "}
        <span className="text-yellow-500"> Islam</span>
      </p>
      <p className="text-gray-100  px-5 text-center">
        Be part of the the blessing and be rewarded In Sha Allah
      </p>

      <div className="flex gap-5 mx-5 ">
        <button className="bg-yellow-500 text-gray-800 mt-10 rounded-lg px-7 py-3">
          Learn More
        </button>

        <button className="border-white border-2 text-gray-100 mt-10 rounded-lg px-7 py-3">
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default Home;
