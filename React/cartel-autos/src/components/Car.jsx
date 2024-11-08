import React from "react";
import { Card, Button } from "react-bootstrap";

const Car = ({ make, model, year, price }) => {
  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{make}</Card.Title>
        <Card.Text>Model: {model}</Card.Text>
        <Card.Text>Year: {year}</Card.Text>
        <Card.Text>Price: {price}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Car;
