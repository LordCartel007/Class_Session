import React from "react";

import Car from "./Car";

import cars from "../cars";

import { Row, Col, Container } from "react-bootstrap";

const CarsList = () => {
  return (
    <Container>
      <Row>
        {cars.map((eachCar) => {
          return (
            <Col sm={6} md={4} lg={6}>
              <Car
                key={eachCar.id}
                make={eachCar.make}
                model={eachCar.model}
                year={eachCar.year}
                price={eachCar.price}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CarsList;
