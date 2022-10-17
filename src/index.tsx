/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route, Link, Routes } from "@solidjs/router";
import Code from "./views/WaterCode";
import './index.css'

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" component={Code} />
      </Routes>
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
