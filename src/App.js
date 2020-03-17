import React from "react";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import { UserProvider } from "./contexts/user.context.js";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Experience from "./views/Experience/Experience";
import Footer from "./components/Footers/Footer";

function App() {
  return (
    <UserProvider>
      <Router basename="/">
        <Route path="/index" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/experience" component={Experience} />
        <Redirect exact from="/" to="/index" />
        <Footer />
      </Router>
    </UserProvider>
  );
}

export default App;
