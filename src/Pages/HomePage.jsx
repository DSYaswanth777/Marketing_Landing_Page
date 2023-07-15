import React, { useRef } from "react";
import Home from "../components/Home/Home";
import Welcome from "../components/Welcome/Welcome";
import Services from "../components/Services/Services";
import Adventure from "../components/Adventure/Adventure";
import Questions from "../components/Questions/Questions";
import Footer from "../components/Footer/Footer";
import Contactus from "../components/Contactus/Contactus";

function HomePage() {
  const servicesRef = useRef(null);
  const questionsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    let elementRef;
    switch (section) {
      case "services":
        elementRef = servicesRef;
        break;
      case "questions":
        elementRef = questionsRef;
        break;
      case "contact":
        elementRef = contactRef;
        break;
      default:
        break;
    }

    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <Home scrollToSection={scrollToSection} />
      <Welcome />
      <Services ref={servicesRef} />
      <Adventure />
      <Questions ref={questionsRef} />
      <Contactus ref={contactRef} />
      <Footer />
    </div>
  );
}

export default HomePage;
