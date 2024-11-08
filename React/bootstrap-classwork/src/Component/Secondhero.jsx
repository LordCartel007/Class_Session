import React from "react";

const Secondhero = () => {
  return (
    <section className="bg-dark text-light">
      <div class="container d-flex justify-content-between align-items-center gap-5 text-center text-sm-start">
        <div>
          <h2>Learn React</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            maiores. Praesentium alias ducimus dolorum ipsum sunt molestias
            dignissimos voluptatum,
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            cumque, facilis quos reprehenderit nesciunt atque facere quaerat
            voluptate nemo, possimus, ducimus rem itaque exercitationem dicta
            vitae consequatur adipisci optio voluptatem sapiente? Voluptatibus
            mollitia eos, aperiam hic esse totam laborum sapiente fugits.
          </p>
          <a href="#" className="btn btn-light">
            <p className="fst-italic">
              <span className="pe-2">
                <i className="bi bi-chevron-right"></i>
              </span>
              Read More
            </p>
          </a>
        </div>
        <img
          src="/undraw_react_re_g3ui.svg"
          alt=""
          className="w-50 d-none d-sm-block img-fluid"
        />
      </div>
    </section>
  );
};

export default Secondhero;
