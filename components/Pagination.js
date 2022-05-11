import React from "react";
import _ from "lodash";

function Pagination({ itemsCount, pageSize, onPageChange, currentPage }) {
  console.log(itemsCount, pageSize);
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <div className="mt-6  mb-6 flex flex-col items-center">
      <ul className="inline-flex -space-x-px">
        {pages.map((page) => (
          <li key={page}>
            <a
              href="#"
              onClick={() => onPageChange(page)}
              className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
