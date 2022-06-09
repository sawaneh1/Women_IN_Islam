import React, { useState } from "react";
import {
  Router,
  useLocation,
  useRoutes,
  useNavigate,
  Navigator,
  Navigate,
} from "react-router-dom";
import Navbar from "../../Navbar";

const Be_Member = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const RenderStep = () => {
    switch (step) {
      case 0:
        return (
          <>
            <h1 className="text-xl text-center mt-20 mb-5">Personal Details</h1>
            <div className="flex flex-wrap -m-2 mb-10 items-center">
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative">
                  <label htmlFor="name" className="leading-7  ">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className="p-2 md:w-1/2 w-full">
                <div className="relative">
                  <label htmlFor="email" className="leading-7  ">
                    Physical Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
            </div>
          </>
        );

      // break;
      case 1:
        return (
          <>
            <h1 className="text-xl text-center mt-20 mb-5">Contact Details</h1>
            <div className="flex flex-wrap -m-2 mb-10 items-center">
              <div className="p-2 md:w-1/2 w-full">
                <div className="relative">
                  <label htmlFor="name" className="leading-7  ">
                    Email Address
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className="p-2 md:w-1/2 w-full">
                <div className="relative">
                  <label htmlFor="email" className="leading-7  ">
                    Phone Number
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h1 className="text-xl text-center mt-20 mb-5"></h1>
            <div className="flex flex-wrap -m-2 mb-10 items-center">
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 ">
                    Reasons
                  </label>
                  <textarea
                    id="reason"
                    name="resaon"
                    placeholder="Please tell us why you wish to be part of this noble assocaition"
                    className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-40 text-base outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
            </div>
          </>
        );

      default:
        break;
    }
  };
  const hanldeNext = () => {
    if (step === 2) return navigate("/");
    setStep((prev) => prev + 1);
  };
  return (
    <div className="linear text-gray-100 relative ">
      <div
        className="bg-gray-200 h-0.5 rounded-full "
        style={{ width: 70 + "%" }}
      ></div>
      <Navbar />
      <div className="lg:w-2/3 md:w-2/3 mx-auto px-10 items-center">
        <RenderStep />
        <div className="mt-5 ">
          <button
            type="button"
            onClick={hanldeNext}
            className="rounded  bg-yellow-500 px-14 hover:bg-transparent hover:border-2 hover:border-white hover:text-white text-gray-800 py-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Be_Member;
