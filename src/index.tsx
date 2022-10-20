/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route, Routes } from "@solidjs/router";
import Code from "./views/WaterCode";
import "./index.css";
import TheHeader from "./components/TheHeader";
import LoginPage from "./views/LoginPage";
import TheFooter from "./components/TheFooter";
import MyInfo from "./views/MyInfo";
import Skeleton from "./views/Skeleton";
import { useLogin } from "./store/login";
import { Toaster } from "solid-toast";

useLogin.init().then(() => {
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
});

// prepare login
