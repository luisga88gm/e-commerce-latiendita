import { useState } from "react";
import ItemCounter from "../item-counter/ItemCounter";

const Item = ({ id, name, description, stock, setSelectedItem }) => {
  const [sotckSelected, setSotckSelected] = useState(0);

  const selectItem = () =>
    setSelectedItem({ id, name, description, stock: sotckSelected });

  return (
    <>
      <div>
        <h2>Nombre del producto: {name}</h2>
        <h2>Descripción del producto: {description}</h2>
        <ItemCounter stock={stock} setSotckSelected={setSotckSelected} />
        <button onClick={selectItem}>Seleccionar producto</button>
      </div>
      <hr />
    </>
  );
};

export default Item;