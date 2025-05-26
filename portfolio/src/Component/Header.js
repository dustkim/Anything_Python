import React, { useEffect, useState } from "react";
import "../CSS/Header.css";

const Header = ({ visible }) => {
  const [activeSection, setActiveSection] = useState("");

  const sections = ["home", "about", "skill", "portfolio", "contact"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

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
          {sections.map((id) => (
            <li
              key={id}
              onClick={() => scrollToSection(id)}
              className={activeSection === id ? "active" : ""}
            >
              {id.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
