import React from "react";
import { Link } from "react-router-dom";
import "./personaldetails.css";
import personimg from "../../assets/personimage.jpg";
const PersonalDetails = () => {
  return (
    <div className="outerpersonaldatamain">
      <Link> </Link>
      <div className="outerpersonaldata">
        <div className="personaldata">
          <h3 style={{ color: "var(--text1)" }}>Personal Information</h3>
          <div className="personaldatainner">
            <img src={personimg} width="100px" alt="person img" />

            <p style={{ color: "var(--text1)", fontWeight: "bold" }}>
              John Smith
            </p>
            <p>age 38 years, Male</p>

            <p style={{ color: "var(--text1)", fontWeight: "bold" }}>
              Senior Software Engineer
            </p>
            <p>ABC Tech Solution</p>
          </div>
        </div>
        <div className="personaldata">
          <h3 style={{ color: "var(--text1)" }}>Contact Information</h3>
          <div className="personaldatainner">
            <div className="personaldatainner1">
              <i class="ri-mail-line"></i>
              <a href="">Johnsmith@abc.com</a>
            </div>
            <div className="personaldatainner1">
              <i class="ri-phone-line"></i>
              <a href="">1234567890</a>
            </div>
            <div className="personaldatainner1">
              <i class="ri-map-pin-line"></i>
              <a href="">US, California</a>
            </div>
            <div className="personaldatainner1">
              <i class="ri-linkedin-box-fill"></i>
              <a href="https://in.linkedin.com" target="_blank">
                Linkedin
              </a>
            </div>
          </div>
        </div>
        <div className="personaldata">
          <h3 style={{ color: "var(--text1)" }}>Schedule Interview</h3>
          <div className="personaldatabutton">
            <div className="personaldatabuttoninner">
              <button className="personaldatabutton1" type="button">
                Message
              </button>
              <br />
              <Link>
                <button className="personaldatabutton1" type="button">
                  Schedule Interview
                </button>
              </Link>
            </div>
            <div className="personaldatabuttoninner1">
              <div>
                <button id="personaldatabutton2" type="button">
                  <i class="ri-thumb-up-fill"></i>Hire
                </button>
              </div>
              <div>
                <button id="personaldatabutton3" type="button">
                  <i class="ri-thumb-down-fill"></i>Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="outerpersonaldata1">
        <button type="button">
          <a href="#">Download Resume</a>
        </button>
      </div>
    </div>
  );
};

export default PersonalDetails;
