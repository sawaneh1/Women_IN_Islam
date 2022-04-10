import React from "react";
import AdminNav from "./AdminNav";
import AdminSidebar from "./AdminSidebar";
import "./style.css";
import user from "../../assests/user.jpg";

const AdminDashboard = () => {
  return (
    <div className="admin">
      <AdminNav />
      <div className="  border-style" />
      <div className="content h-full c-h flex">
        <AdminSidebar className="h-full" />
        <div className="  border-styles" />

        <div className=" w-full mx-auto   p-20 pt-10 text-white ">
          <div className="flex  justify-between  px-32 py-10">
            <div>Admin content</div>
            <div className="flex relative">
              <span className="best_scorers  font-bold text-lg">
                best scorers
              </span>
              <img
                src={user}
                class="absolute left-28 h-2 sm:h-9 rounded-full"
                alt="Flowbite Logo"
              />
              <img
                src={user}
                class=" h-2 sm:h-9 rounded-full absolute left-32"
                alt="Flowbite Logo"
              />{" "}
              {/* <img
                src={user}
                class="h-2 sm:h-9 rounded-full absolute left-36"
                alt="Flowbite Logo"
              /> */}
            </div>
          </div>
          <div className="main-content  ">
            <div className="flex justify-between">
              <div className="flex gap-4">
                <h4>Total Members</h4>
                <span className="bg-neutral-900 rounded-lg w-10 text-center">
                  71
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
