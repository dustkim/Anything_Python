import React, { useState } from "react";
import "../CSS/Skill.css";
import skill from "../Image/skill.png";
import python from "../Image/python.jpeg";
import vscode from "../Image/vscode.png";
import aws from "../Image/aws.png";
import gcp from "../Image/GCP.png";
import next from "../Image/next.png";
import back from "../Image/back.png";

const Skill = () => {
  const [index, setIndex] = useState(0);
  const images = [python, vscode, aws, gcp];

  const Prev = () => {
    if (index > 0) setIndex(index - 1);
    else if (index <= 0) setIndex(images.length - 1);
  };

  const Next = () => {
    if (index < images.length - 1) setIndex(index + 1);
    else if (index >= images.length - 1) setIndex(0);
  };
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
          <div className="SkillBox">
            <button onClick={Prev}>
              <img src={back} alt="back" width={50} />
            </button>
            <div className="SkillImageRap">
              <div className="SkillImage" style={{ transform: `translateX(-${index * 100}%)` }}>
                {images.map((img, i) => (
                  <div className="ImageSlide" key={i}>
                    <img src={img} alt={`${img}`} />
                  </div>
                ))}
              </div>
            </div>
            <button onClick={Next}>
              <img src={next} alt="next" width={50} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
