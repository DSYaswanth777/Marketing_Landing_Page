import React from "react";
import "./Services.css";
import marketing_services from "../../assets/marketing_services.png";
import marketing_service2 from "../../assets/marketing.webp";
import Lottie from "lottie-react";
import Animation from "../../assets/Animation_1.json";
import Animation2 from "../../assets/animation2.json";

const Services = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="service">
      <div className="container pt-5">
        <div className="d-flex justify-content-center  text-center container">
          <h3 className="tex-left services_heading">
            Digital Marketing Tool Kit
          </h3>
        </div>
        <div className="container d-flex justify-content-center aligin-items-center p-4">
          <div className="row justify-content-around pt-5 mt-2">
            <div className="col-md-6 col-lg-4 p-4 text-left services">
              <h4 className="text-white">Website Design</h4>
              <p>Bespoke landing pages that sparkle and sell your brand.</p>
            </div>
            <div className="col-md-6 col-lg-4 p-4 text-left services">
              <h4 className="text-white">Social Media Marketing</h4>
              <p>Ignite your brand's presence across social media platforms.</p>
            </div>
            <div className="col-md-6 col-lg-4 p-4 text-left services">
              <h4 className="text-white">SEO</h4>
              <p>Boost your visibility and conquer search engine rankings.</p>
            </div>
            <div className="col-md-6 col-lg-4 p-4 text-left services">
              <h4 className="text-white">PPC Ads</h4>
              <p>
                Accelerate growth with precision-targeted pay-per-click
                campaigns.
              </p>
            </div>
            <div className="col-md-6 col-lg-4 p-4 text-left services">
              <h4 className="text-white">Content Marketing</h4>
              <p>
                Engage, educate, and inspire your audience with compelling
                content.
              </p>
            </div>
            <div className="col-md-6 col-lg-4 p-4 text-left services">
              <h4 className="text-white">Email Marketing</h4>
              <p>
                Connect, nurture, and convert with strategic email campaigns.
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column container ">
          <div className=" serv_sec ">
            <div className="marketing_services_img">
              <Lottie animationData={Animation} />
            </div>
            <div className="marketing_services serv ">
              <h2 className="marketing_services_heading">
                Introducing Our Full- service Digital Adventure
              </h2>
              <p>
                From social media management to email campaigns, we cover every
                aspect of digital marketing. Dive into the world of Digital
                Adventure and explore new territories!
              </p>
            </div>
          </div>
          <div className="serv_sec2 ">
            <div className="marketing_services serv ">
              <h2 className="marketing_services_heading ">
                Google Ads & Campaigns
              </h2>
              <p>
                Leverage the power of social advertising to captivate your
                audience and convert them into customers.
              </p>
            </div>
            <div className="marketing_services_img">
              <Lottie animationData={Animation2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Services;
