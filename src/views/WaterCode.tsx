import { Component, lazy, Suspense } from "solid-js";
import { For } from "solid-js";
import LoadingAnimation from "../components/LoadingAnimation";
import TempCode from "../components/TempCode";
import useCode from "../store/code";

const CodeList = lazy(async () => {
  await useCode.fetchCode();
  return import("../components/CodeList");
});

export default () => {

  const clickGenCode = async () => {
    await useCode.genCode();
  };
  return (
    <>
      <div class="h-4/5 flex flex-col justify-center">
        <Suspense fallback={LoadingAnimation}>
          <CodeList />
        </Suspense>
        <div class="flex flex-col mx-auto">
          <button
            class="btn text-xl text-center m-3 w-50"
            onClick={clickGenCode}
          >
            Get Code
          </button>
        </div>
      </div>
    </>
  );
};
