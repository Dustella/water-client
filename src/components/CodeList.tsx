import { createMemo, For } from "solid-js";
import { getCode } from "../store/code";
import TempCode from "./TempCode";

export default  () => {
  const codes =  getCode.tmpCode;
  return (
    <>
      <For each={codes}>{(code) => <TempCode code={code} />}</For>
    </>
  );
};
