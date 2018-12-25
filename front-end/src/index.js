import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import router
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";

// import HOC authenticate
import Authenticate from "./authentication/Authenticate";
const HOC = Authenticate(App);

ReactDOM.render(
  <Router>
    <HOC />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
