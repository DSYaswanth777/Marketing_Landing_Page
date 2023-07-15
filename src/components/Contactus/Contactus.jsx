import React from "react";
import "./Contacus.css"
// function Contactus() {
  const Contactus = React.forwardRef((props, ref) =>{

  return (
    <div className="contactus" ref={ref}>
      <div className="container pt-5 ">
        <div className="d-flex justify-content-center align-items-center flex-column pt-5  ">
          <h1 className="contactus_heading ">Don't Be A Stranger</h1>
          <h2 className="text-white">Connect Here</h2>
          <div className=" d-flex flex-column justify-content-center align-items-center w-100">

          <div className="mb-3 input_tag">
            <label for="exampleFormControlInput1" className="form-label text-white">
              Name
            </label> 
            <input
              type="name"
              className="form-control "
              id="exampleFormControlInput1"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-3  input_tag">
            <label for="exampleFormControlInput1" className="form-label text-white">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-3 input_tag">
            <label for="exampleFormControlInput1" className="form-label text-white">
              Phone
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Mobile Number"
            />
          </div>
          <div className="mb-5  input_tag">
            <label for="exampleFormControlTextarea1" className="form-label text-white">
            Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Share the need with us"
              rows="3"
            ></textarea>
          </div>

          </div>
          <button className="submit_btn">Submit</button>
        </div>
      </div>
    </div>
  );
})


export default Contactus;
