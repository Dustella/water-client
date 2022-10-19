import axios from "axios";
import { untrack } from "solid-js";
import { createStore } from "solid-js/store";
import toast from "solid-toast";

export const [getLogin, setLogin] = createStore({
  token: "",
  authorization: "",
});

export const useLogin = {
  login: async (name: string, pass: string) => {
    const resp = await axios.post("/login", { name, pass });
    if (resp.data.success) {
      const token = resp.data.token;
      setLogin("token", token);
      localStorage.setItem("token", token);
    }
    return resp.data.success;
  },

  auth: async () => {
    const auth = untrack(() => getLogin.token);
    const resp = await axios.post("/auth", { auth });
    if (resp.data.success) {
      const { token } = resp.data;
      setLogin("authorization", token);
      axios.defaults.headers.common["Authorization"] = token;
    }
    return resp.data.success;
  },

  init: async () => {
    const token = localStorage.getItem("token");
    if (token) {
      setLogin("token", token);
      const success = await useLogin.auth();
      if (!success) {
        toast.error("token expired, login again");
        localStorage.removeItem("token");
        location.href = "/login";
      }
      return success;
    }
    return false;
  },
};
