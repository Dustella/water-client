import axios from "axios";
import { createStore } from "solid-js/store";
import { UserInfo } from "../types/Code";

export const [getInfo, setInfo] = createStore({
  name: "",
  phone: "",
  school: "",
  balance: "",
} as UserInfo);

export const useInfo = {
    fetchInfo: async () => {
        const resp = await axios.get("/user/info");
        setInfo(resp.data)
    }
};
