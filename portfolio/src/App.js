import React, { useEffect, useState } from "react";
import "../src/App.css";
import Header from "../src/Component/Header";
import Home from "../src/Component/Home";
import About from "../src/Component/About";
import Skill from "../src/Component/Skill";
import Portfolio from "../src/Component/Portfolio";
import Contact from "../src/Component/Contact";
import Footer from "../src/Component/Footer";

function App() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const scroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();

        if (rect.top <= 0) {
          setShowHeader(true);
        } else {
          setShowHeader(false);
        }
      }
    };

    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <div className="TotalBox">
      <Header visible={showHeader} />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skill">
        <Skill />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
