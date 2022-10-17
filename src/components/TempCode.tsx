import { Component } from "solid-js";
import { TempCode } from "../types/Code";

const TempCodeComponent: Component<{ code: TempCode }> = (props) => {
  return (
    <>
      <div class="relative h-30 bg-white m-5 rounded-xl p-2 shadow-xl mx-auto">
        <h1 class="text-center text-3xl font-bold m-4">{props.code.code}</h1>
        <p class="text-gray-400 text-right m-2">{props.code.createdAt}<br></br>{props.code.expires}</p>
      </div>
    </>
  );
};

export default TempCodeComponent;
