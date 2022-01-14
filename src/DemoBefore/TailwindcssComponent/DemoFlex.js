import React from "react";

export default function DemoFlex() {
  return (
    <div className="w-screen h-screen bg-red-400">
      <div class="flex flex-row justify-center items-center flex-wrap h-1/2 bg-purple-400 w-full gap-4">
        <div class="w-1/2 h-12 bg-green-400">01</div>
        <div class="w-1/2 h-12 bg-yellow-300 ">02</div>
        <div class="w-1/2 h-12 bg-white ">03</div>
      </div>
    </div>
  );
}
