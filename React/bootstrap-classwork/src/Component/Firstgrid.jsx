import React from "react";

const Firstgrid = () => {
  return (
    <section className="my-4">
      <div className="container">
        <div className="row text-center g-4">
          <div className="col-sm-6 col-md">
            <div className="card bg-dark text-light">
              <div className="card-body">
                <div className="h1">
                  <i class="bi bi-laptop"></i>
                </div>
                <h5 className="card-title">Computer</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary"></h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a className="btn btn-primary" href="#" role="button">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md">
            <div className="card bg-secondary text-light">
              <div className="card-body">
                <div className="h1">
                  <i class="bi bi-file-person-fill"></i>
                </div>
                <h5 className="card-title">Virtual</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary"></h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a className="btn btn-dark" href="#" role="button">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md">
            <div className="card bg-dark text-light">
              <div className="card-body">
                <div className="h1">
                  <i class="bi bi-people-fill"></i>
                </div>
                <h5 className="card-title">People</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary"></h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a className="btn btn-primary" href="#" role="button">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Firstgrid;
