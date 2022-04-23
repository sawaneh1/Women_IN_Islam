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
      <h3 className="text-lg font-bold text-yellow-500 sm:px-20 px-5 lg:px-28">
        Our Story
      </h3>

      <div className="first-section flex sm:flex-row flex-col justify-between gap-10  sm:px-20 px-5   lg:px-20 py-5">
        <div className="lg:w-1/2 ">
          <p className="font-bold text-sm ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
            quibusdam id aut repudiandae animi corrupti maxime assumenda labore
            nemo iusto aliquid dolores velit neque ab, asperiores enim molestiae
            possimus doloremque!
          </p>
          <div className="flex justify-center mt-5">
            <div className="border-2  justify-center border-yellow-500 w-2 h-2 rounded-full flex items-center  bg-yellow-500"></div>
          </div>
          <div className="flex sm:px-20 px-5">
            <div className="flex gap-2 items-center mt-5">
              <div>
                <img src={img} className="rounded-full" />
              </div>
              <p className="text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
                nostrum eveniet earum incidunt? Facere natus nesciunt veniam
                veritatis minus nam, eum at quod incidunt dolor porro ex
                reiciendis neque cupiditate.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center lg:gap-10">
          <div className=" justify-center hidden sm:flex">
            <div className="border-2  justify-center border-yellow-500 w-4 h-4 rounded-full flex items-center  bg-yellow-500"></div>
          </div>

          <ul>
            <li className="mb-5">
              <span>01</span>{" "}
              <h2 className="font-bold text-lg">We Love helping The Poor</h2>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, modi.
              </span>
            </li>
            <li className="mb-5">
              <span>02</span>{" "}
              <h2 className="font-bold text-lg">We Orgnanise seminers</h2>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, modi.
              </span>
            </li>{" "}
            <li className="mb-5">
              <span>03</span>{" "}
              <h2 className="font-bold text-lg">
                We give dawah to fellow sisters
              </h2>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, modi.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
