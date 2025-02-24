import React from "react";
import { Link } from "react-router-dom";

const categories = ({ categories }) => {
  return (
    <ul className="flex flex-wrap gap-2 font-semibold">
      {categories?.length > 0 &&
        categories?.map((category) => {
          return (
            <li key={category}>
              <Link to="#" className="bg-white py-2 px-3 rounded-md text-blues capitalize text-xs inline-block">{category}</Link>
            </li>
          );
        })}
    </ul>
  );
};

export default categories;
