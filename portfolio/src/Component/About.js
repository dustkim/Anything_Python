import React from "react";
import "../CSS/About.css";
import wonjin from "../Image/wonjin.png";
import about from "../Image/aboutme.png";

const About = () => {
  return (
    <div className="TotalAboutBox">
      <div className="AboutContainer">
        <img src={about} alt="aboutme" width={100} />
        <div className="AboutContentBox">
          <div className="Aboutme">
            <div className="AboutmeTitle">
              <h2>안녕하세요🙂 빠르게 변화는 시대에 맞춰가고 싶은 김원진입니다.</h2>
            </div>
            <div className="AboutmeIntroduce">
              <h3>How I Work</h3>
              <ul>
                <li>주어진 상황에서 답을 찾는 것을 즐깁니다.</li>
                <li>맡은 일을 끝까지 해결하려고 노력합니다.</li>
                <li>열린 마인드로 소통하며 팀원들과 함께 일하는 것을 좋아합니다.</li>
              </ul>
            </div>
            <div className="AboutmeDetail">
              <div className="Education Degree">
                <div>
                  <h3>Education</h3>
                  <p>
                    AI기반 챗봇 및 OCR 개발 전문가 과정
                    <span> | 코리아 IT 아카데미</span>
                    <span> | 24.03.08 - 24.09.06</span>
                  </p>
                </div>
                <div>
                  <h3>Degree</h3>
                  <p>
                    가천대학교 건축공학과 졸업
                    <span> | 16.02 - 22.03</span>
                  </p>
                </div>
              </div>
              <div className="Award Certificate">
                <div>
                  <h3>Award</h3>
                  <p>
                    고용노동부 공공데이터 활용 공모전
                    <span> | 장려상</span>
                    <span> | 24.08.28</span>
                  </p>
                </div>
                <div>
                  <h3>Certificate</h3>
                  <p>
                    <span>SQLD</span>
                    <span> | 25.04.04</span>
                  </p>
                  <p>
                    ADsP
                    <span> | 25.03.21</span>
                  </p>
                  <p>
                    mcf AI-900, DP-900, AZ-900
                    <span> | 24.10 - 24.11</span>
                  </p>
                  <p>
                    운전면허증 1종 보통
                    <span> | 16.07.27</span>
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div className="AboutmeElse">
            <img
              src={wonjin}
              alt="wonjin"
              width={300}
              height={300}
              style={{ borderRadius: "2%" }}
            ></img>
            <div className="Explain">
              <ul>
                <li>
                  Name : <span>KIM WONJIN</span>
                </li>
                <li>
                  Birthday : <span>1997 06 26</span>
                </li>
                <li>
                  Age : <span>29세(만 28세)</span>
                </li>
                <li>
                  City : <span>Seoul</span>
                </li>
                <li>
                  Phone : <span>010-7764-3675</span>
                </li>
                <li>
                  E-mail : <span>dnjswlssla78@naver.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button className="Resume" onClick={() => window.open("/resume.pdf")}>
          View Resume
        </button>
      </div>
    </div>
  );
};

export default About;
