import React from "react";

export default function Card() {
  return (
    <div className="card w-full">
      <div className="content pt-5 bg-gray-300 rounded-xl">
        <h3 className="text-purple-500 font-bold text-xl">Category</h3>
        <p className="text-lg mb-3">Cybersoft Frontend Developer</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          tempora aspernatur numquam odit nesciunt dolores aperiam illum iusto
          optio accusamus.
        </p>
        <div className="footer rounded-bl-xl bg-gray-300 rounded-br-xl flex justify-between mt-5">
            <p>1 USD</p>
            <button className="rounded-lg bg-purple-500 px-2 py-2 hover:text-green-500 transition duration-300">Register</button>
        </div>
      </div>
     
    </div>
  );
}
