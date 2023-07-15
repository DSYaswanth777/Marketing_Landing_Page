import React from "react";
import "./Questions.css";

const Questions = React.forwardRef((props,ref) =>{
  return (
    <div className="questions" ref={ref}>
      <div className="conatiner">
        <div className="d-flex  flex-column justify-content-around aligin-items-center pt-5 text-left">
          <h1 className="pt-5 text-left questions_heading">
            Burning Questions ?
          </h1>
        </div>
        <div className="container questions_section pb-5">
          <div className="row justify-content-around pt-5 mt-2 ">
            <div className="col-md-6  p-4 text-left services">
              <h4 className="text-white"> Why choose Digital Adventure?</h4>
              <p className="">
                We turn clicks into customers with our dynamic digital marketing
                strategies tailored to your brand’s unique needs.
              </p>
            </div>
            <div className="col-md-6 p-4 text-left services">
              <h4 className="text-white">How do you boost social presence?</h4>
              <p>
                Our social media experts craft targeted content and campaigns
                that engage and grow your audience.
              </p>
            </div>
            <div className="col-md-6  p-4 text-left services ">
              <h4 className="text-white">What are your pricing plans?</h4>
              <p>
                Our pricing is customized based on your specific marketing
                objectives and desired ad spend. Get in touch with us for a
                tailored quote.
              </p>
            </div>
            <div className="col-md-6 p-4 text-left services">
              <h4 className="text-white">Can we track our progress?</h4>
              <p>
                Absolutely! We provide regular reports and updates to keep you
                in the loop about your marketing journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  })


export default Questions;
