import React from "react";
import {useState} from "react";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import AOS from "aos";

function App() {
    AOS.init();
    var count = 500;
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <main className="card">
            <NavBar setCurrentPage={setCurrentPage}/>
            {(currentPage === 1) && <Home />}
            {(currentPage === 2) && <Projects />}
            {(currentPage === 3) && <About count={count} />}
        </main>
    );
}

export default App;
