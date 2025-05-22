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
          <div id="Img">
            <img src={aboutme} alt="aboutme" width={100} onClick={() => scrollToSection("about")} />
            <p>about</p>
          </div>
          <div id="Img">
            <img src={skill} alt="skill" width={100} onClick={() => scrollToSection("skill")} />
            <p>skill</p>
          </div>
          <div id="Img">
            <img
              src={portfolio}
              alt="portfolio"
              width={100}
              onClick={() => scrollToSection("portfolio")}
            />
            <p>portfolio</p>
          </div>
          <div id="Img">
            <img
              src={contact}
              alt="contact"
              width={100}
              onClick={() => scrollToSection("contact")}
            />
            <p>contact</p>
          </div>
        </div>
        <div
          className="HorizonLine"
          style={{
            width: "30%",
            textAlign: "center",
            marginTop: "20px",
            borderBottom: "3px solid black",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Home;
