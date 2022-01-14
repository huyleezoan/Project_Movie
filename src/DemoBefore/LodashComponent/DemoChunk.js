import React from "react";
import _ from "lodash";
export default function DemoChunk() {
  const arr = ["id", "1", "name", "Huy", "lop", "20TCLC - DT5"];
  const result = _.chunk(arr, 4);
  console.log('result: ', result);
  return <div>{result}</div>;
}
