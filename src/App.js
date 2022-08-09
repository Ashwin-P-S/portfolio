import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AOS from "aos";

function App() {
  AOS.init();

  var count = 500;

  return (
    <Router>
      <div className="card">
        <NavBar />
        <Route path="/" exact component={Home} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/about" exact render={() => <About count={count} />} />
      </div>
    </Router>
  );
}

export default App;
