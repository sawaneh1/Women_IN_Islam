import React from "react";

const More = () => {
  return (
    <div className="more mx-auto flex justify-center w-full py-5 mt-10 text-gray-100">
      <div>
        <h5 className="text-center">Are you ready</h5>
        <h4 className="text-center uppercase font-bold">To volunteer?</h4>

        <p className="text-sm text-center mb-5 mt-5">
          The Prophet Peace be upon Him said: The most beloved people to Allah
          are those who are are of benefit to people.
        </p>

        <div className="flex justify-center mb-4 ">
          <button className="rounded-full px-5 py-2 bg-yellow-500">
            BE A MEMBER
          </button>
        </div>
      </div>
    </div>
  );
};

export default More;
