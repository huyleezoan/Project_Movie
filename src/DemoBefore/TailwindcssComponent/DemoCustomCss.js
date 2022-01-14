import React from "react";
import "./DemoCustomCss.css";
export default function DemoCustomCss() {
  return (
    <div>
      <div className="container">
        <article className="bg-green-400 shadow-xl">
          <p className="text-2xl text">Title</p>
          <p className="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
            accusantium!
          </p>
        </article>
        <button className="hoverme">Hover Me</button>
      </div>
    </div>
  );
}
