import React from "react";
import _ from "lodash";
export default function DemoJoin() {
  let arr = ["huy", "minh", "nam"];
  let arrPerson = [
    {
      id: 1,
      name: "person 1",
    },
    {
      id: 2,
      name: "person 2",
    },
    {
      id: 3,
      name: "person 3",
    },
  ];
  // es6
  const result = arr.join("-");
  // lodash
  const resultLodash = _.join(arr, "+");

  // person
  const person = _.find(arrPerson, (item) => item.id === 2);
  return (
    <div>
      {result}
      <br />
      {resultLodash}
      <div>
        <p>
          Name: {person.name} - id: {person.id}
        </p>
      </div>
    </div>
  );
}
