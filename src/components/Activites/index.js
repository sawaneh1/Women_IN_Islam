import React from "react";
import img1 from "../../assests/image1.jpg";
import img2 from "../../assests/image2.jpg";
import img3 from "../../assests/image3.jpg";

const Activities = () => {
  return (
    <div
      id="activities"
      className="mt-10 sm:px-20 sm:mx-auto w-full flex justify-center  "
    >
      <div>
        <div>
          <div className="flex justify-between px-1">
            <h4 className="text-yellow-500 font-bold px-5 text-lg">
              Our Recent Activities
            </h4>
            <span className="text-gray-900 hidden sm:block">See All</span>
          </div>
          <div className="sm:flex gap-4 mt-5 w-full">
            <div className="relative ">
              <img
                src={img1}
                className="z-0 grayscale"
                height={300}
                width={300}
              />
              <div className="flex justify-center">
                <p className="absolute z-10 bottom-10 text-center flex justify-center text-white font-bold  ">
                  Semina at Talinding
                </p>
              </div>
              <p className="text-center">
                Educating sister on <span className="font-bold">Ghuls</span>
              </p>
            </div>
            <div className="relative">
              <img
                src={img2}
                className="grayscale z-0 "
                height={300}
                width={300}
              />
              <div className="flex justify-center">
                <p className="absolute z-50 bottom-10 text-center flex justify-center font-bold text-white  ">
                  Semina at Talinding
                </p>
              </div>
              <p className="text-center">
                Educating sister on <span className="font-bold">Ghuls</span>
              </p>
            </div>
            <div className="relative">
              <img
                src={img3}
                className="z-0 grayscale"
                height={300}
                width={300}
              />
              <div className="flex justify-center">
                <p className="absolute z-10 font-bold bottom-10 text-center flex justify-center text-white  ">
                  Semina at Talinding
                </p>
              </div>
              <p className="text-center">
                Educating sister on <span className="font-bold">Ghuls</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
