import React from "react";
import "../CSS/Header.css";

const Header = ({ visible }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={`TotalHeaderBox ${visible ? "visible" : ""}`}>
      <div className="HeaderContainer">
        <ul className="HeaderContentList">
          <li onClick={() => scrollToSection("home")}>HOME</li>
          <li onClick={() => scrollToSection("about")}>ABOUT</li>
          <li onClick={() => scrollToSection("skill")}>SKILL</li>
          <li onClick={() => scrollToSection("portfolio")}>PORTFOLIO</li>
          <li onClick={() => scrollToSection("contact")}>CONTACT</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
