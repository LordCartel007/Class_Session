import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
const CartItems = () => {
  const [hidden, setHidden] = useState(false);

  const toggleCartState = () => {
    setHidden(!hidden);
  };
  return (
    <div>
      <Button variant="primary" onClick={toggleCartState}>
        {hidden ? "Hide Cart Item" : "Show cart item"}
      </Button>
      {hidden ? (
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Car</Card.Title>
            <Card.Text>Price: $10000</Card.Text>
          </Card.Body>
        </Card>
      ) : null}
    </div>
  );
};

export default CartItems;
