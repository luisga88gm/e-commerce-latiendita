import React from "react";
import { CartContext } from "../../context/CartContext";

const ComponentConsumer = () => {
  return (
    <div>
      <h3>Esta es la información desde el consumidor:</h3>
      {/* <CartContext.Consumer>{({items}) => <p>{info}</p>}</CartContext.Consumer> */}
    </div>
  );
};

export default ComponentConsumer;