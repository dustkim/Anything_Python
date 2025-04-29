import React from "react";
import "../src/App.css";
import Banner from "../src/Component/Banner";
import Main from "../src/Component/Main";
import Content from "../src/Component/Content";

function App() {
  return (
    <div className="totalBox">
      <Banner />
      <div className="contentBox">
        <Main />
        <Content />
      </div>
    </div>
  );
}

export default App;
