import React from "react";
import "../CSS/Home.css";
import aboutme from "../Image/aboutme.png";
import skill from "../Image/skill.png";
import portfolio from "../Image/portfolio.png";
import contact from "../Image/direct-mail.png";

const Home = () => {
  const scrollToSection = (sectionid) => {
    const section = document.getElementById(sectionid);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="TotalHomeBox">
      <div className="HomeContainer">
        <div className="HomeContentBox">
          <h1>Welcom to my site!</h1>
          <p>Hello, I'm Kim wonjin.</p>
        </div>
        <div className="HomeImageBox">
          <img src={aboutme} alt="aboutme" width={100} onClick={() => scrollToSection("about")} />
          <img src={skill} alt="skill" width={100} onClick={() => scrollToSection("skill")} />
          <img
            src={portfolio}
            alt="portfolio"
            width={100}
            onClick={() => scrollToSection("portfolio")}
          />
          <img src={contact} alt="contact" width={100} onClick={() => scrollToSection("contact")} />
        </div>
      </div>
    </div>
  );
};

export default Home;
