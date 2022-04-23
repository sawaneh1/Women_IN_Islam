import React from "react";

const Home = () => {
  return (
    <div className="flex  home flex-col items-center h-full place-items-center place-content-center justify-items-center m-auto sm:-mt-20 -mt-20">
      <p className="header-text text-5xl  sm:text-6xl sm:px-44   font-bold text-white text-center ">
        A group of <span className="text-yellow-500"> aspiring</span> sisters
        aiming to <span className="text-yellow-500">help </span> others in{" "}
        <span className="text-yellow-500"> Islam</span>
      </p>
      <p className="text-gray-100  px-5 text-center mt-5 text-sm">
        Be part of the the blessing and be rewarded In Sha Allah
      </p>
      <div className="mx-10 -my-4 absolute sm:top-44 top-32 left-16">
        <div className="border-2  justify-center border-yellow-500 w-2 h-2 rounded-full flex items-center  bg-yellow-500"></div>
      </div>
      <div className="mx-10 -my-4 absolute top-20 right-20">
        <div className="border-2  justify-center border-gray-100 w-4 h-4 rounded-full flex items-center  bg-gray-100"></div>
      </div>
      <div className="mx-10 -my-4 absolute sm:bottom-44 sm:left-60 bottom-44 left-1">
        <div className="border-2  justify-center border-gray-100 w-2 h-2 rounded-full flex items-center  bg-gray-100"></div>
      </div>
      <div className="mx-10  mt-10 absolute sm:top-96 sm:right-10 bottom-10 right-10">
        <div className="border-2  justify-center border-yellow-500 w-2 h-2 rounded-full flex items-center  bg-yellow-500"></div>
      </div>
      <div className="flex gap-5 mx-5 mt-2 ">
        <button className="bg-yellow-500 text-gray-800 mt-10  hover:border-2  hover:bg-transparent hover:border-yellow-500 hover:text-gray-300  rounded-lg px-7 py-3">
          Learn More
        </button>

        <button className="border-white  border-2 text-gray-100 mt-10 hover:border-yellow-500 hover:text-gray-200 rounded-lg px-7 py-3">
          Donate Now
        </button>
      </div>
      <div class="custom-shape-divider-bottom-1650495082">
        {" "}
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          {" "}
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>{" "}
        </svg>{" "}
      </div>
    </div>
  );
};

export default Home;
