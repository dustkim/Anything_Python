import React from "react";
import "../CSS/Portfolio.css";
import portfolio from "../Image/portfolio.png";
import project1 from "../Image/project1.png";
import project2 from "../Image/project2.png";
import project3 from "../Image/project3.png";

const Portfolio = () => {
  return (
    <div className="TotalPortfolioBox">
      <div className="PortfolioContainer">
        <img src={portfolio} alt="portfolio" width={100} />
        <div className="PortfolioContentBox">
          <div className="Portfolio">
            <div className="project">
              <img src={project1} alt="project1" width={300} />
              <div
                className="overlay"
                onClick={() => window.open("https://github.com/dustkim/SVL")}
              >
                <p className="overlayText">다국어 지도</p>
              </div>
            </div>
            <div className="project">
              <img src={project2} alt="project2" width={300} />
              <div
                className="overlay"
                onClick={() => window.open("https://github.com/dustkim/AI-sanjae")}
              >
                <p className="overlayText">AI산재판별</p>
              </div>
            </div>
            <div className="project">
              <img src={project3} alt="project3" width={300} />
              <div
                className="overlay"
                onClick={() => window.open("https://github.com/dustkim/Auto-Aware")}
              >
                <p className="overlayText">드라이빙 케어</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
