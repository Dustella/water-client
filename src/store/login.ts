import { untrack } from "solid-js";
import { createStore } from "solid-js/store";
import toast from "solid-toast";
import requests from "../requests";

export const [getLogin, setLogin] = createStore({
  token: "",
  authorization: "",
});

export const useLogin = {
  login: async (name: string, pass: string) => {
    const resp = await requests().post("/login", { name, pass });
    if (resp.data.success) {
      const token = resp.data.token;
      setLogin("token", token);
      localStorage.setItem("token", token);
    }
    return resp.data.success;
  },

  auth: async () => {
    const auth = untrack(() => getLogin.token);
    const resp = await requests().post("/auth", { auth });
    if (resp.data.success) {
      const { token } = resp.data;
      setLogin("authorization", token);
      localStorage.setItem("authorization", token);
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
