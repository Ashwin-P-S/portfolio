import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AOS from "aos";

function App() {
  AOS.init();

  var count = 100;

  return (
    <Router>
      <div className="card">
        <NavBar />
        <Route path="/" exact component={Home} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/about" exact render={() => <About count={count} />} />
        <Route path="/contact" exact component={Contact} />
      </div>
    </Router>
  );
}

export default App;
