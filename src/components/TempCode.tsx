import { Component } from "solid-js";
import { TempCode } from "../types/Code";

const TempCodeComponent: Component<{ code: TempCode }> = (props) => {
  return (
    <>
      <div class="relative h-25 dark:bg-slate-700 bg-white m-2 rounded-xl p-2 shadow-xl mx-auto">
        <h1 class="text-center dark:text-yellow-50 text-2xl font-bold m-2">
          {props.code.code}
        </h1>
        <p class="text-xs dark:text-yellow-50 text-gray-400 text-right m-2">
          {props.code.createdAt}
          <br />
          {props.code.expires}
        </p>
      </div>
    </>
  );
};

export default TempCodeComponent;
