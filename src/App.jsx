import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/about" className="nav-item">About</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </main>

      <footer>
        © {new Date().getFullYear()} Dindo Esmani
      </footer>
    </>
  );
}

export default App;