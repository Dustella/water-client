/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route, Link } from "@solidjs/router";
import Code from "./views/WaterCode";

render(
  () => (
    <Router>
      <Route path="/" component={Code} />
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
