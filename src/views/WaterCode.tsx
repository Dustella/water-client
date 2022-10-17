import type { Component } from "solid-js";
import { For } from "solid-js";
import TempCode from "../components/TempCode";

export default () => {
  const codes = [
    {
      code: "1234",
      expires: "2021-09-01T00:00:00.000Z",
      createdAt: "2021-09-01T00:00:00.000Z",
    },
    {
      code: "5678",
      expires: "2021-09-01T00:00:00.000Z",
      createdAt: "2021-09-01T00:00:00.000Z",
    },
  ];
  return (
    <>
      <For each={codes}>{(code) => <TempCode code={code} />}</For>
      <div class="flex flex-col">
        <button class="btn text-3xl text-center m-5 w-50">Get Code</button>
      </div>
    </>
  );
};
