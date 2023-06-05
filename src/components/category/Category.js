import React from "react";

const Category = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mx-36 my-20">
      <div>
        <div>
          <div>Category:A</div>
          <div className="border-2 p-2">
            <ul className="flex justify-between">
              <li>Javascript Tutorial </li>
              <li className="mt-1">
                {" "}
                <button class="rounded-sm bg-gray-200  p-2 border-gray-600 hover:bg-gray-300 duration-200">
                  Details
                </button>
              </li>
            </ul>

            <ul className="flex justify-between">
              <li>Angular Basics</li>
              <li className="mt-1">
                {" "}
                <button class="rounded-sm bg-gray-200  p-2 border-gray-600 hover:bg-gray-300 duration-200">
                  Details
                </button>
              </li>
            </ul>
            <ul className="flex justify-between ">
              <li>React Introduction</li>
              <li className="mt-1">
                <button class="rounded-sm bg-gray-200  p-2 border-gray-600 hover:bg-gray-300 duration-200">
                  Details
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <div>Category:B</div>
          <div className="border-2 p-2">
            <ul className="flex justify-between">
              <li>Best Food in Dhaka To eat</li>
              <li className="mt-1">
                {" "}
                <button class="rounded-sm bg-gray-200  p-2 border-gray-600 hover:bg-gray-300 duration-200">
                  Details
                </button>
              </li>
            </ul>

            <ul className="flex justify-between">
              <li>Burger Vs Pizza</li>
              <li className="mt-1">
                {" "}
                <button class="rounded-sm bg-gray-200  p-2 border-gray-600 hover:bg-gray-300 duration-200">
                  Details
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>Modal</div>
    </div>
  );
};

export default Category;
