import React from "react";
import "./Home.css";

function Home({ scrollToSection }) {
  const handleScrollToServices = () => {
    scrollToSection("services");
  };

  const handleScrollToContact = () => {
    scrollToSection("contact");
  };

  const handleScrollToQuestions = () => {
    scrollToSection("questions");
  };

  return (
    <>
      <div className="home">
        <div className="container ">
          <div className="home_content">
            <div className="d-flex flex-column justify-content-center align-items-center ">
              <h1 className="home_heading text-center">DIGITAL</h1>
              <h1 className="home_heading">MARKETING</h1>
              <div className="d-flex pt-5">
                <a href="#" onClick={handleScrollToServices}>
                  Services
                </a>
                <a href="#" onClick={handleScrollToQuestions}>
                  Questions
                </a>
                <a href="#" onClick={handleScrollToContact}>
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
