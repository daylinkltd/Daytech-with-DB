// Category.js

import { cx } from "@/src/utils";
import React from "react";

const Category = ({ name }) => {
  return (
    <a
      href={`${name}`}
      className={cx(
        "inline-block py-1.5 md:py-2 px-6 md:px-10 rounded-full border-2 border-solid border-dark dark:border-light hover:scale-105 transition-all ease duration-200 m-2",
        "bg-light text-dark dark:bg-dark dark:text-light"
      )}
    >
      #{name}
    </a>
  );
};

export default Category;
