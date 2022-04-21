import React from "react";
import img from "../../assests/logo1.jpg";
import img1 from "../../assests/img1.jpg";
import img2 from "../../assests/img2.jpg";
import img3 from "../../assests/img3.jpg";
const About = () => {
  return (
    <div id="about">
      <h1 className="text-center text-5xl text-gray-900 font-bold mt-10 px-5 mb-5 ">
        About Us
      </h1>
      <div className="about-content block sm:flex items-center">
        <img src={img} alt="" />
        <div className="px-5">
          <img src={img1} alt="" className="hidden sm:block" />

          <p className=" py-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            quia, veniam nulla aliquid, atque perferendis eligendi unde alias,
            in minima excepturi inventore quis voluptatem perspiciatis
            consectetur reiciendis possimus eaque cumque? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Iste commodi animi laborum sunt.
            Ea cupiditate accusantium officiis pariatur eaque? Suscipit, fugit
            illo eligendi molestias saepe fugiat a ab rerum eos. Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Quasi aliquid
            voluptatem minus voluptate odio magnam enim dolore aut error. Iure.
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-5xl mt-5 text-center font-bold text-gray-900">
          What <span className="text-yellow-500">we</span> do
        </h3>

        <div className="mx-10 mt-5 sm:flex justify-center gap-5">
          <div class="max-w-sm bg-white rounded-lg border mt-5 mb-5 border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img class="rounded-t-lg" src={img3} alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-yellow-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-yellow-500 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="max-w-sm mt-5 mb-5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img class="rounded-t-lg" src={img2} alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-yellow-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-yellow-500 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>{" "}
          <div class="max-w-sm mt-5 mb-5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img class="rounded-t-lg" src={img1} alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-yellow-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-yellow-600 dark:hover:bg-yellow-500 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
