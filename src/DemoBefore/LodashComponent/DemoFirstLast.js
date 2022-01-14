import React from "react";
import _ from "lodash";
export default function DemoFirstLast() {
  let arrStudent = [
    { id: 1, name: "Student 1" },
    { id: 2, name: "Student 2" },
    { id: 3, name: "Student 3" },
  ];
  const arr = [
    ["001", "student 001"],
    ["002", "student 002"],
  ];
  const [id, name] = _.first(arr);
  const [id2, name2] = _.last(arr);
  const firstItem = _.first(arrStudent);
  return (
    <div>
      First Name: {firstItem.name}
      <br />
      Array:
      <br />
      id:{id}, name:{name}
    </div>
  );
}
