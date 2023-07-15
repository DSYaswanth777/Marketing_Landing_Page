import React from "react";
import "./Footer.css";
import facebook_icon from "../../assets/facebook_icon.svg";
import instagram_icon from "../../assets/instagram_icon.svg";
import twitter_icon from "../../assets/twitter_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import mobile_icon from "../../assets/phone_icon.svg";
import email_icon from "../../assets/email_icon.svg";
import linkedin_icon from "../../assets/linkedin_icon.svg"
function Footer() {
  return (
    <div className="footer">
      <div className="d-flex justify-content-center align-items-center flex-column pt-5  ">
        <div>
          <p>
            {" "}
            <img
              src={location_icon}
              style={{ width: "15px", height: "15px", marginRight: "10px" }}
              className="icon"
            />
            Madhapur,Hyderabad
          </p>

          <p>
            {" "}
            <img
              src={mobile_icon}
              alt="mobile"
              style={{ width: "15px", height: "15px", marginRight: "10px" }}
              className="icon"
            />{" "}
            +91 9391393516
          </p>
          <p>
            {" "}
            <img
              src={email_icon}
              style={{ width: "15px", height: "15px", marginRight: "10px" }}
              className="icon"
            />
            info@digitaladventure.in
          </p>
        </div>
        <div className="d-flex gap-5 pb-4 pt-5">
          <img src={facebook_icon} style={{ width: "30px", height: "30px" }} className="icon" />
          <img src={instagram_icon} style={{ width: "30px", height: "30px" }}  className="icon"/>
          <img src={twitter_icon} style={{ width: "30px", height: "30px" }}  className="icon" />
          <img src={linkedin_icon} style={{ width: "30px", height: "30px" }}  className="icon" />
        </div>
        <p>&copy; 2023 Digital Adventure</p>
      </div>
    </div>
  );
}

export default Footer;
