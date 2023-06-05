import React from "react";

const CategoryDetails = ({ data }) => {
  return (
    <div className="border-2 p-6 mx-36 mt-2 ">
      <ul className="flex justify-between">
        <li>Title: {data.title}</li>
      </ul>

      <ul className="flex justify-between">
        <li>URL: {data.url}</li>
      </ul>
      <ul className="flex justify-between ">
        <li>Category: {data.category}</li>
      </ul>
    </div>
  );
};

export default CategoryDetails;
