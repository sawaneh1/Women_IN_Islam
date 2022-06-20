import React from "react";
import img from "../../assests/logo1.jpg";
// import img1 from "../../assests/img1.jpg";
// import img2 from "../../assests/img2.jpg";
// import img3 from "../../assests/img3.jpg";
import a from "../../assests/a.svg";
import b from "../../assests/b.svg";
import c from "../../assests/c.svg";
import d from "../../assests/d.svg";
import e from "../../assests/e.svg";
import f from "../../assests/f.svg";
import g from "../../assests/g.svg";
import h from "../../assests/h.svg";
import img1 from "../../assests/image1.jpg";
import img2 from "../../assests/image2.jpg";
import img3 from "../../assests/image3.jpg";
import Be_member_modal from "../../utils/Modal/Modal";

const About = () => {
  return (
    <div id="about">
      <h1 className="text-center text-5xl text-gray-900 font-bold mt-10 px-5 mb-5 ">
        About Us
      </h1>
      <h3 className="md:text-3xl  text-xlfont-bold text-yellow-500 sm:px-20 px-5 lg:px-28">
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
            <div className="border-2  justify-center  border-yellow-500 w-2 h-2 rounded-full flex items-center  bg-yellow-500"></div>
          </div>
          <div className="flex sm:px-20 px-5">
            <div className="flex gap-2 items-center mt-5">
              <div>
                <img src={h} className="rounded-full" />
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
            <div className="border-2  justify-center   border-yellow-500 w-4 h-4 rounded-full flex items-center  bg-yellow-500"></div>
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
      <div className="our-mission flex flex-col-reverse sm:flex-row justify-center sm:px-20 py-5 sm:mt-10">
        <div className="py-5">
          <div className="flex justify-between">
            <h3 className="font-bold text-xl px-10 text-yellow-500 ">
              Our Mission
            </h3>
            <div className="mx-20 -my-4">
              <div className="border-2  justify-center circler-color border-yellow-500 w-4 h-4 rounded-full flex items-center  bg-yellow-500"></div>
            </div>
          </div>
          <p className="px-10 mt-10 width">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            facere fuga perferendis blanditiis esse velit cupiditate voluptatem
            unde eligendi cum nam a ipsam minima eveniet harum in excepturi,
            dolorum deleniti?
          </p>

          <div className="px-10 mt-5">
            <ul className="flex gap-2 ">
              <li>
                <h4 className="text-xl font-bold">95%</h4>
                <span className="text-sm">Lorem, ipsum.</span>
              </li>
              <li>
                <h4 className="text-xl font-bold">95%</h4>
                <span className="text-sm">Lorem, ipsum.</span>
              </li>{" "}
              <li>
                <h4 className="text-xl font-bold">95%</h4>
                <span className="text-sm">Lorem, ipsum.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="img-about sm:block hidden">
          <img src={img2} width="350" height="200" alt="" />
        </div>
        <div className="img-about sm:hidden">
          <img src={img2} className="w-full px-5 h-80" alt="" />
        </div>
      </div>

      <div className="our-mission flex flex-col-reverse sm:flex-row-reverse  justify-center sm:px-20 sm:mt-10 ">
        <div className="py-5">
          <div className="flex justify-between">
            <h3 className="font-bold text-xl px-10 text-yellow-500 ">
              Our Vision
            </h3>
            <div className="mx-20 -my-4">
              <div className="border-2  justify-center circler-color border-yellow-500 w-4 h-4 rounded-full flex items-center  bg-yellow-500"></div>
            </div>
          </div>
          <p className="px-10 mt-10 width">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            facere fuga perferendis blanditiis esse velit cupiditate voluptatem
            unde eligendi cum nam a ipsam minima eveniet harum in excepturi,
            dolorum deleniti?
          </p>

          <div className="px-10 mt-5">
            <ul className="flex gap-2 ">
              <li>
                <h4 className="text-xl font-bold">95%</h4>
                <span className="text-sm">Lorem, ipsum.</span>
              </li>
              <li>
                <h4 className="text-xl font-bold">95%</h4>
                <span className="text-sm">Lorem, ipsum.</span>
              </li>{" "}
              <li>
                <h4 className="text-xl font-bold">95%</h4>
                <span className="text-sm">Lorem, ipsum.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="img-about sm:block hidden">
          <img src={img2} width="350" height="200" alt="" />
        </div>
        <div className="img-about sm:hidden">
          <img src={img2} className="w-full px-5 h-80" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
