import React from "react";
import { BOOKS } from "../constants";

export default function BookList({ completeList }) {
  return (
    <div>
      <h1>{completeList ? `Completed` : `To Read`}</h1>
      <ul>
        {!completeList &&
          BOOKS.map((book, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  console.log("do something");
                }}
              >
                {book}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
