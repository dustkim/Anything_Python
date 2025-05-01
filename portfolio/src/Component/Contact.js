import React from "react";
import "../CSS/Contact.css";
import ContactImageMail from "../Image/direct-mail.png";
import ContactImageGithub from "../Image/github.png";

const Contact = ({ Contact }) => {
  return (
    <div className="TotalContactBox">
      <div className="ContactContainer">
        <div className="ContactMainImageBox">
          <img src={ContactImageMail} alt="contact" width={150}></img>
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
            src={ContactImageGithub}
            alt="github"
            width={50}
            onClick={() => window.open("https://github.com/dustkim")}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Contact;
