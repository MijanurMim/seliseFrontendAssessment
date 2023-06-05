import React from "react";
import CategoryDetails from "./CategoryDetails";
import CategoryItems from "./CategoryItems";

const Category = ({ data }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mx-36 my-20">
      <div>
        <div>
          <div>Category:A</div>
          <div className="border-2 p-2">
            {data.map((data, index) => (
              <CategoryItems key={index} data={data} />
            ))}
          </div>
        </div>
        <div className="mt-10">
          <div>Category:B</div>
          <div className="border-2 p-2">
            {data.map((data, index) => (
              <CategoryItems key={index} data={data} />
            ))}
          </div>
        </div>
      </div>
      <div>
        {data.map((data, index) => (
          <CategoryDetails key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Category;
