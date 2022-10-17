import axios from "axios";
import { createStore } from "solid-js/store";
import { PermenantCode, TempCode } from "../types/Code";

const [getCode, setCode] = createStore({
  tmpCode: [] as TempCode[],
  permenantCode: {} as PermenantCode,
});

const useCode = {
  genCode: async () => {
    const resp = await axios.get("/get-temp-code");
    console.log(resp.data)
  },
  getCode,
};

export default useCode;
