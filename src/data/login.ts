import axios from "axios";
import { createStore } from "solid-js/store";

const [getLogin, setLogin] = createStore({
  token: "",
  authorization: "",
});

export const useLogin = () => ({
  login: async (name: string, pass: string) => {
    const resp = await axios.post("/login");
    const token = resp.data;
    setLogin("token", token);
    localStorage.setItem("token", token);
  },

  auth: async () => {
    const oriToken = getLogin.token;
    const resp = await axios.post("/auth", { oriToken });
    if (!resp.data.success) {
      return;
    }
    const { token } = resp.data;
    setLogin("authorization", token);
    axios.defaults.headers.common["Authorization"] = getLogin.authorization;
  },

  init: async () => {
    const token = localStorage.getItem("token");
    if (token) {
      setLogin("token", token);
    }
    axios.defaults.baseURL = "https://water.dustella.net";
  },
});
