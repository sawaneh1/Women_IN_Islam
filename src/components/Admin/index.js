import React from "react";
import AdminNav from "./AdminNav";
import AdminSidebar from "./AdminSidebar";
import "./style.css";
import user from "../../assests/user.jpg";

const AdminDashboard = () => {
  return (
    <div className="admin overflow-hidden">
      <AdminNav />
      <div className="  border-style" />
      <div className="content h-full c-h flex">
        <AdminSidebar className="h-full" />
        <div className="  border-styles" />

        <div className=" w-full mx-auto   px-10  text-white ">
          <div className="flex  justify-between  px-32 py-10">
            <h2 className="text-lg font-bold">Admin Panel</h2>
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
                <span className="bg-neutral-900 rounded-lg w-10 h-7 text-center">
                  71
                </span>
              </div>
              <div className="flex items-center gap-2">
                <h4>filter Users</h4>
                <input
                  type="search"
                  placeholder="Search"
                  className="rounded-full bg-transparent text-gray-100 focus:border-blue-900 border-neutral-800 p-1.5 border-2  placeholder:p-2"
                />
              </div>
            </div>

            <div className="table w-full mt-10">
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-md text-gray-200 font-extrabold uppercase dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3  ">
                        Product name
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Color
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Category
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" class="px-6 py-3">
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class=" border-b dark:bg-gray-100 dark:border-gray-700 shadow-2xl hover:bg-neutral-900 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-300 dark:text-white whitespace-nowrap"
                      >
                        Apple MacBook Pro 17"
                      </th>
                      <td class="px-6 py-4">Sliver</td>
                      <td class="px-6 py-4">Laptop</td>
                      <td class="px-6 py-4">$2999</td>
                      <td class="px-6 py-4 text-right">
                        <a
                          href="#"
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr class=" border-b dark:bg-gray-100 dark:border-gray-700 shadow-2xl hover:bg-neutral-900 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-300 dark:text-white whitespace-nowrap"
                      >
                        Apple MacBook Pro 17"
                      </th>
                      <td class="px-6 py-4">Sliver</td>
                      <td class="px-6 py-4">Laptop</td>
                      <td class="px-6 py-4">$2999</td>
                      <td class="px-6 py-4 text-right">
                        <a
                          href="#"
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>{" "}
                    <tr class=" border-b dark:bg-gray-800 dark:border-gray-700 shadow-2xl hover:bg-neutral-900 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-300 dark:text-white whitespace-nowrap"
                      >
                        Apple MacBook Pro 17"
                      </th>
                      <td class="px-6 py-4">Sliver</td>
                      <td class="px-6 py-4">Laptop</td>
                      <td class="px-6 py-4">$2999</td>
                      <td class="px-6 py-4 text-right">
                        <a
                          href="#"
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr class=" border-b dark:bg-gray-100 dark:border-gray-700 shadow-2xl hover:bg-neutral-900 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        class="px-6 py-4 font-bold text-gray-300 dark:text-white whitespace-nowrap"
                      >
                        Apple MacBook Pro 17"
                      </th>
                      <td class="px-6 py-4">Sliver</td>
                      <td class="px-6 py-4">Laptop</td>
                      <td class="px-6 py-4">$2999</td>
                      <td class="px-6 py-4 text-right">
                        <a
                          href="#"
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr class=" border-b dark:bg-gray-100 dark:border-gray-700 hover:bg-neutral-900 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-300 dark:text-white whitespace-nowrap"
                      >
                        Microsoft Surface Pro
                      </th>
                      <td class="px-6 py-4">White</td>
                      <td class="px-6 py-4">Laptop PC</td>
                      <td class="px-6 py-4">$1999</td>
                      <td class="px-6 py-4 text-right">
                        <a
                          href="#"
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr class=" dark:bg-gray-300 hover:bg-neutral-900 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-100 dark:text-white whitespace-nowrap"
                      >
                        Magic Mouse 2
                      </th>
                      <td class="px-6 py-4">Black</td>
                      <td class="px-6 py-4">Accessories</td>
                      <td class="px-6 py-4">$99</td>
                      <td class="px-6 py-4 text-right">
                        <a
                          href="#"
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="flex gap-5 mt-2">
                  <span className="cursor-pointer text-neutral-600">
                    Previous
                  </span>
                  <span className="cursor-pointer">1</span>
                  <span className="bg-neutral-900 px-3">2</span>
                  <span className="cursor-pointer">3</span>
                  <span className="cursor-pointer">4</span>
                  <span className="cursor-pointer">5</span>
                  <span className="cursor-pointer">Next</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
