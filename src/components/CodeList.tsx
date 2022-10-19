import { createMemo, For } from "solid-js";
import useCode, { getCode } from "../store/code";
import TempCode from "./TempCode";

export default  () => {
  const codes = createMemo(()=> getCode.tmpCode);
  return (
    <>
      <For each={codes()}>{(code) => <TempCode code={code} />}</For>
    </>
  );
};
