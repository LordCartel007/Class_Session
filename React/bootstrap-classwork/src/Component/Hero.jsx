import React from "react";

const Hero = () => {
  return (
    <section className="bg-dark text-light text-center text-sm-start py-2">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <h1>
            Become a <span className="text-warning">web developer</span>
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Blanditiis, repudiandae nemo similique odit recusandae, quod, saepe
            sint totam tenetur aliquam nisi optio! Sint doloribus saepe ducimus
            voluptatibus, commodi velit adipisci. Corrupti qun
          </p>
          <button className="btn btn-primary">Start The Enrolment</button>
        </div>
        <img
          src="/developer.svg"
          alt=""
          className="w-50 d-none d-sm-block img-fluid"
        />
      </div>
    </section>
  );
};

export default Hero;
