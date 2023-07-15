import React, { useEffect, useRef } from "react";
import "./Welcome.css";
import rocket_icon from "../../assets/target-icon.svg";
import keyindustries_icon from "../../assets/rocket_icon.svg";
import creative_icon from "../../assets/creative_icon.svg";

const Welcome = () => {
  const counters = [
    { value: 100, icon: rocket_icon },
    { value: 10, icon: keyindustries_icon },
    { value: 1200, icon: creative_icon },
  ];

  const counterRefs = useRef(counters.map(() => useRef(null)));

  useEffect(() => {
    const incrementCounter = (counterIndex) => {
      const counterElement = counterRefs.current[counterIndex].current;
      const targetValue = counters[counterIndex].value;

      let currentValue = 0;
      const interval = setInterval(() => {
        if (currentValue < targetValue) {
          currentValue++;
          counterElement.innerText = `${currentValue}+`;
        } else {
          clearInterval(interval);
        }
      }, 10); // Adjust the interval time as per your preference
    };

    counters.forEach((_, index) => incrementCounter(index));
  }, []);

  return (
    <div className="welcome">
      <div className="container">
        <div className="welcome_content ">
          <div className="d-flex justify-content-center flex-column align-items-center pt-5 container">
            <h1 className="welcome_heading pt-5">
              All In One Digital Marketing
            </h1>
            <p className="welcome_subcontent">
              Life’s too short for ordinary marketing. Let’s make it
              extraordinary.
            </p>
            <div className="d-flex flex-column flex-md-row justify-content-center container pt-5 gap-5 pb-5 mb-5">
              {counters.map((counter, index) => (
                <div
                  key={index}
                  className="metric_section p-5 rounded-5 d-flex flex-column justify-content-center text-center align-items-center gap-3"
                >
                  <span className="metrics" ref={counterRefs.current[index]}>
                    0&nbsp;+
                  </span>
                  <img
                    src={counter.icon}
                    alt="rocket"
                    style={{ height: "40px", width: "40px" }}
                  />
                  <div className="metrics_desc">
                    {index === 0
                      ? "Projects Delivered"
                      : index === 1
                      ? "Key Industries"
                      : "Ads & Creatives"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
