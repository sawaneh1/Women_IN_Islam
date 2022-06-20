import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
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
  const back = useLocation();
  console.log("back", back);
  const [step, setStep] = useState(0);
  const [finished, setFinished] = useState(false);
  const [calStep, setCalStep] = useState(0);
  const totalStep = 5;
  const stepsToadd = 100 / (totalStep + 1);
  const navigate = useNavigate();
  // router.back()

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
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 text-gray-800  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                    className="w-full bg-gray-100 bg-opacity-50 text-gray-800 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h1 className="text-xl text-center mt-20 mb-5">
              Why do you want to join us?
            </h1>
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
                    className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-40 text-base outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-200  text-gray-800 ease-in-out"
                  ></textarea>
                </div>
              </div>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <h1 className="text-xl text-center mt-20 mb-5">More Details</h1>
            <div className="flex flex-wrap -m-2 mb-10 items-center">
              <div className="p-2 w-full">
                <div className="relative flex flex-col item">
                  <label htmlFor="message" className="leading-7 mb-3 ">
                    Will you participate in group activities if accepted as a
                    member?
                  </label>
                  <div class="flex items-center mb-4">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-checkbox"
                      class="ml-2 text-sm font-medium text-gray-200 dark:text-gray-300"
                    >
                      Yes In Sha Allah
                    </label>
                  </div>
                  <div class="flex items-center mb-4">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-checkbox"
                      class="ml-2 text-sm font-medium text-gray-200 dark:text-gray-300"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h1 className="text-xl text-center mt-20 mb-5">
              Specify your gender
            </h1>
            <div className="flex flex-wrap -m-2 mb-10 items-center">
              <div className="p-2 w-full">
                <div className="relative flex flex-col item">
                  <label htmlFor="message" className="leading-7 mb-3 ">
                    What is your gender?
                  </label>
                  <div class="flex items-center mb-4">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-gray-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-checkbox"
                      class="ml-2 text-sm font-medium text-gray-200 dark:text-gray-300"
                    >
                      Male.
                    </label>
                  </div>
                  <div class="flex items-center mb-4">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-checkbox"
                      class="ml-2 text-sm font-medium text-gray-200 dark:text-gray-300"
                    >
                      Female.
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      case 5:
        return (
          <>
            <h1 className="text-xl text-center mt-20 mb-5">
              {" "}
              Specify your age
            </h1>
            <div className="flex flex-wrap -m-2 mb-10 items-center">
              <div className="p-2 w-full">
                <div className="relative flex flex-col item">
                  <div className="p-2 md:w-1/2 w-full">
                    <div className="relative">
                      <label htmlFor="email" className="leading-7 mb-3 ">
                        How old are you?
                      </label>
                      <input
                        type="number"
                        id="number"
                        name="email"
                        className="w-full mt-3 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-gray-800 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
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
    console.log(calStep);
    if (step === totalStep) {
      setFinished(true);
    }
    setCalStep((prev) => prev + stepsToadd);
    setStep((prev) => prev + 1);
  };

  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const hanldeBack = () => {
    if (step === 0) return navigate("/");
    setCalStep((prev) => prev - stepsToadd);
    setStep((prev) => prev - 1);
  };

  return (
    <div className="linear text-gray-100 relative ">
      <div
        className="bg-gray-200 h-1.5 rounded-full "
        style={{ width: calStep + "%" }}
      ></div>
      <Navbar />
      <>
        {finished == true ? (
          <>
            <div
              id="popup-modal"
              tabindex="-1"
              class=" overflow-y-auto  mt-20 sm:px-20 overflow-x-hidden fixed w-full left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center"
              aria-hidden="true"
            >
              <div class="relative p-4 w-full md:px-32  md:mt-20 h-full">
                <div class="relative bg-white text-gray-800 rounded-lg shadow dark:bg-gray-700">
                  <div class="p-6 text-center rounded-xl">
                    <svg
                      class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <h3 class="mb-5 text-lg font-normal text-gray-800 dark:text-gray-400">
                      Your information has been successfully submitted. We will
                      get back to your shorly upon review of your information..
                    </h3>

                    <button
                      data-modal-toggle="popup-modal"
                      type="button"
                      onClick={() => navigate("/")}
                      class="text-gray-800 bg-white border-2 hover:border-yellow-500 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg  text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                    >
                      Okay Thanks
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div>
            <div className="lg:w-2/3 md:w-2/3 mx-auto px-10 items-center">
              <RenderStep />
            </div>
            <div className=" w-screen px-10 relative mt-10">
              <div className="mt-10 mx-48 flex justify-between w-full  ">
                <div className="">
                  <button
                    type="button"
                    onClick={hanldeBack}
                    className="rounded absolute top-14 sm:px-10 md:px-14  left-10 hover:text-yellow-500 text-gray-100  bg-transparent border-2 px-8 hover:bg-transparent hover:border-2 hover:border-white  py-2"
                  >
                    Back
                  </button>
                </div>
                <button
                  type="button"
                  onClick={hanldeNext}
                  className="rounded absolute right-10 top-14  bg-yellow-500 md:px-14 sm:px-10 px-8 hover:bg-transparent hover:border-2 hover:border-white hover:text-white text-gray-800 py-2"
                >
                  Next
                </button>
                <div></div>
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default Be_Member;
