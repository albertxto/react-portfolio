import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./views/Home.js";
import About from "./views/About.js";

function App() {
  return (
    <HashRouter basename="/">
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
