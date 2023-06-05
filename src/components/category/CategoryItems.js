import React from "react";

const CategoryItems = ({ data }) => {
  return (
    <ul className="flex justify-between">
      <li>{data.title} </li>
      <li className="mt-1">
        {" "}
        <button className="rounded-sm bg-gray-200  p-2 border-gray-600 hover:bg-gray-300 duration-200">
          Details
        </button>
      </li>
    </ul>
  );
};

export default CategoryItems;
