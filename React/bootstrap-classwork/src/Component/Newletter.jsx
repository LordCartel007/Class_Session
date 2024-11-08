import React from "react";

const Newletter = () => {
  return (
    <section className="bg-primary p-5 text-light">
      <div class="container d-md-flex justify-content-between align-items-center justify-content-between">
        <h3>Sign-Up For Our Newslletter</h3>
        <div className="input-group mb-3 w-50 custom-email-input">
          <input
            type="Email"
            class="form-control"
            placeholder="Enter Email Address"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button className="btn btn-dark" type="button" id="button-addon2">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newletter;
