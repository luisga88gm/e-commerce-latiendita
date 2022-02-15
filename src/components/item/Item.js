import { useState } from "react";
import ItemCounter from "../item-counter/ItemCounter";

const Item = ({
  id,
  name,
  description,
  image,
  stock = 20,
  setSelectedItem,
}) => {
  const [sotckSelected, setSotckSelected] = useState(0);

  const selectItem = () =>
    setSelectedItem({ id, image, name, description, stock: sotckSelected });

  return (
    <>
      <div>
        <h2>Nombre del producto: {name}</h2>
        <h2>Descripción del producto: {description}</h2>
        <img src={image} alt="image of product" />
        <ItemCounter stock={stock} setSotckSelected={setSotckSelected} />
        <button onClick={selectItem}>Seleccionar producto</button>
      </div>
      <hr />
    </>
  );
};

export default Item;