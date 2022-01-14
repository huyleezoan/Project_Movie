import React from "react";
import "./BaiTapLayOut.css";
import Card from "./Card";
export default function BaiTapLayOut() {
  return (
    <div className="container">
      <h1 className="text-center text-green-500 text-xl font-bold my-5">
        Welcome to CyberSoft
      </h1>
      <div className="grid grid-cols-3 gap-4 mt-5">
        <div className="text-center">
          <Card />
        </div>
        <div className="text-center">
          <Card />
        </div>
        <div className="text-center">
          <Card />
        </div>
      </div>
    </div>
  );
}
