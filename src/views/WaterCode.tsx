import { Match, Switch } from "solid-js";
import CodeList from "../components/CodeList";
import LoadingAnimation from "../components/LoadingAnimation";
import { genTempCode, refetchTempCode, useTempCode } from "../store/code";

export default () => {
  refetchTempCode();
  const clickGenCode = async () => {
    await genTempCode();
    await refetchTempCode();
  };
  return (
    <>
      <div class="h-4/5 flex flex-col justify-center">
        <Switch>
          <Match when={useTempCode.loading}>
            <LoadingAnimation />
          </Match>
          <Match when={!useTempCode.loading}>
            <CodeList />
          </Match>
        </Switch>
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
