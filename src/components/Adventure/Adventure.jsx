import React from "react";
import "./Adventure.css";
function Adventure() {
  return (
    <div>
      <div className="adventure_section">
        <div className="container">
          <div className="d-flex justify-content-center aligin-items-center flex-column gap-4 text-center pb-5 text-center">
            <h2 className="adventure_heading pt-5 mt-5 text-center ">Join  The Adventure</h2>
            <div class="input-group mb-3 mx-auto ">
              <input
                type="text"
                className="form-control"
                placeholder="name@gmail.com"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn "
                type="button"
                id="button-addon2"
                
              >
               Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adventure;
