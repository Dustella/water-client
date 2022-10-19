import axios from "axios";
import { createStore } from "solid-js/store";
import { PermenantCode, TempCode } from "../types/Code";

export const [getCode, setCode] = createStore({
  tmpCode: [] as TempCode[],
  permenantCode: {} as PermenantCode,
});

const useCode = {
  fetchCode: async () => {
    const resp = await axios.get("/user/code/temp");
    setCode("tmpCode", resp.data);
    console.log(resp.data);
  },
  genCode: async () => {
    await axios.post("/user/code/temp");
    await useCode.fetchCode();
  },
};

export default useCode;
