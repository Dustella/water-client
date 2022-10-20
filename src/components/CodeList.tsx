import { For } from "solid-js";
import { useTempCode } from "../store/code";
import TempCode from "./TempCode";

export default () => {
  const codes = useTempCode;
  return (
    <>
      <For each={codes()}>{(code) => <TempCode code={code} />}</For>
    </>
  );
};
