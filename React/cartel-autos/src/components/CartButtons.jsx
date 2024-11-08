import React, { useState } from "react";

import { Button, Container } from "react-bootstrap";
const CartButtons = () => {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount(count + 1);
  };

  const decrementHandler = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    // using fragment to wrap stuff like a div (the empty <> </> is a fragment)
    <>
      <Container
        style={{
          display: "flex",
          marginTop: "30px",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Button onClick={incrementHandler} variant="primary">
          Increment
        </Button>
        <p style={{ margin: 0 }}>{count}</p>
        <Button onClick={decrementHandler} variant="danger">
          {" "}
          Decrement
        </Button>
      </Container>
    </>
  );
};

export default CartButtons;
