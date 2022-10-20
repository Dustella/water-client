import axios, { AxiosRequestConfig } from "axios";
import toast from "solid-toast";

export default (config?: AxiosRequestConfig) => {
  const instance = axios.create({
    baseURL: "https://water.dustella.cc",
    headers: {
      Authorization: localStorage.getItem("authorization"),
    },
    ...config,
  });
  instance.interceptors.response.use(
    (resp) => {
      // if status code is not 200, sent a toast
      if (resp.status !== 200) {
        toast.error("Server Internal error");
      }
      return resp;
    },
    () => {
      toast.error("Request err");
    }
  );

  return instance;
};
