import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {

  
  return (
    <Router>
      <NavBar />
      <Route path='/' exact component={ Home } />
      <Route path='/contact' exact component={ Contact } />
      <Route path='/about' exact component={ About } />
    </Router>
  );
}

export default App;
