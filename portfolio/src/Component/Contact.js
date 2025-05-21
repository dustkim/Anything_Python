import React from "react";
import "../CSS/Contact.css";
import Mail from "../Image/direct-mail.png";
import Github from "../Image/github.png";

const Contact = () => {
  return (
    <div className="TotalContactBox">
      <div className="ContactContainer">
        <div className="ContactMainImageBox">
          <img src={Mail} alt="contact" width={150} />
        </div>
        <ul className="ContactContentList">
          <li>
            Phone : <span>010-7764-3675</span>
          </li>
          <li>
            E-mail : <span>dnjswlssla78@naver.com</span>
          </li>
        </ul>
        <div className="ContactImageBox">
          <img
            src={Github}
            alt="github"
            width={30}
            onClick={() => window.open("https://github.com/dustkim")}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
