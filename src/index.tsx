/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route, Link, Routes } from "@solidjs/router";
import Code from "./views/WaterCode";
import './index.css'
import TheHeader from "./components/TheHeader";
import LoginPage from "./views/LoginPage";
import TheFooter from "./components/TheFooter";

render(
  () => (
    <Router>
      <TheHeader />
      <Routes>
        <Route path="/code" component={Code} />
        <Route path="/login" component={LoginPage} />
      </Routes>
      <TheFooter />
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
