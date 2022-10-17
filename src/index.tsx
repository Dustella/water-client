/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route, Link, Routes } from "@solidjs/router";
import Code from "./views/WaterCode";
import './index.css'
import TheHeader from "./components/TheHeader";

render(
  () => (
    <Router>
      <TheHeader />
      <Routes>
        <Route path="/code" component={Code} />
      </Routes>
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
