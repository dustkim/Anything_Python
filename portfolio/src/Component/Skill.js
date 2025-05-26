import React from "react";
import "../CSS/Skill.css";
import skill from "../Image/skill.png";

const Skill = () => {
  return (
    <div className="TotalSkillBox">
      <div className="SkillContainer">
        <img src={skill} alt="skill" width={100} />
        <div className="SkillContentBox">
          <div className="Skill">
            <div className="Backend">
              Backend
              <ul>
                <li>Python</li>
                <li>FastAPI</li>
                <li>NodeJS</li>
                <li>Javascript</li>
                <li>JWT</li>
              </ul>
            </div>
            <div className="Frontend">
              Frontend
              <ul>
                <li>Html</li>
                <li>Css</li>
                <li>Javascript</li>
                <li>React</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
