import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {

  var count = 100;
  
  return (
    <Router>
      <NavBar />
      <Route path='/' exact component={ Home } />
      <Route path='/about' exact render={ (props) => (
        <About count={count} />
      ) } />
      <Route path='/contact' exact component={ Contact } />
      
    </Router>
  );
}

export default App;
