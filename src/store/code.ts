import { createResource } from "solid-js";
import requests from "../requests";
import { TempCode } from "../types/Code";

const [useTempCode, { refetch: refetchTempCode }] = createResource<TempCode[]>(
  async () => (await requests().get("/user/code/temp")).data
);

const genTempCode = () => requests().post("/user/code/temp");

// export const usePermenantCode = createResource<PermenantCode>(

export { useTempCode, refetchTempCode, genTempCode };
