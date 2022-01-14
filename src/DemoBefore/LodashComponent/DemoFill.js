import _ from "lodash";
import React from "react";

export default function DemoFill() {
  let array = [
    {
      id: 1,
      name: "name 1",
    },
    {
      id: 2,
      name: "name 2",
    },
    {
      id: 3,
      name: "name 3",
    },
  ];
  _.fill(array, { id: 4, name: "name new " },1,3);
  console.log("new array: ", array);
  return <div></div>;
}
