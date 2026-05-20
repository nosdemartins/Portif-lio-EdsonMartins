import React from 'react';
import ScrollButton from "./components/ScrollButton";
import About from "./features/About/About";
import Projects from "./features/Projects/Projects";
import Navbar from './features/Navbar/Navbar';
import Contact from './features/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <About />
        <Projects />
        <ScrollButton />
        <Contact />
      </main>
    </div>
  );
}

export default App;