import React from "react";
import "../CSS/Home.css";

const Home = ({ items }) => {
  return (
    <div className="TotalHomeBox">
      <div className="HomeContainer">
        <div className="HomeContentBox">
          <h1>Welcom to my site!</h1>
          <p>Hello, I'm Kim wonjin.</p>
        </div>
        <div className="HomeImageBox"></div>
      </div>
    </div>
  );
};

export default Home;
