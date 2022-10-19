/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route, Link, Routes, useHref } from "@solidjs/router";
import Code from "./views/WaterCode";
import './index.css'
import TheHeader from "./components/TheHeader";
import LoginPage from "./views/LoginPage";
import TheFooter from "./components/TheFooter";
import MyInfo from "./views/MyInfo";
import Skeleton from "./views/Skeleton";
import { useLogin } from "./store/login";
import axios from "axios";
import { Toaster } from "solid-toast";
import { useInfo } from "./store/info";

axios.defaults.baseURL = "https://water.dustella.cc";

await useLogin.init()
useInfo.fetchInfo()

render(
  () => (
    <Router>
      <Toaster />
      <TheHeader />
      <Routes>
        <Route path="/code" component={Code} />
        <Route path="/login" component={LoginPage} />
        <Route path="/mine" component={MyInfo} />
        <Route path="/" component={Skeleton} />
      </Routes>
      <TheFooter />
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);

// prepare login

