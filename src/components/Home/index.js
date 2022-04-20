import React from "react";

const Home = () => {
  return (
    <div className="flex  home flex-col items-center h-full place-items-center place-content-center justify-items-center m-auto">
      <p className="header-text text-4xl p-5  font-bold text-white text-center ">
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
      <div class="custom-shape-divider-bottom-1650484785">
        {" "}
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          {" "}
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>{" "}
        </svg>{" "}
      </div>
    </div>
  );
};

export default Home;
