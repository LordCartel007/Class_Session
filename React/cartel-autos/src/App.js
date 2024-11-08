import CarsList from "./components/CarsList";
import React from "react";
import CartItems from "./components/CartItems";
// import ReactDOM from "react-dom";
import CartButtons from "./components/CartButtons";

function App() {
  return (
    <div>
      <CarsList />
      <CartButtons />
      <CartItems />
    </div>
  );
}

export default App;
