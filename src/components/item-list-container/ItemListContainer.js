import { useState } from "react";
import Item from "../item/Item";

const items = [
    {id: "1", name: "Leche", price: "50,99"},
    {id: "2", name: "Jugo", price: "71,99"},
    {id: "3", name: "Yerba", price: "25,99"},
    {id: "4", name: "Carne", price: "40,99"},
]

const ItemListContainer = () => {
    const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div>
        <h1>Lista de Productos</h1>
        <h3>Producto Seleccionado</h3>
        <p>{selectedItem ? selectedItem.name : "Ninguno"}</p>
        <hr />
        {items.map(({id, name, price}) => (
            <Item key={id} id={id} name={name} price={price} setSelectedItem={setSelectedItem} />
        ))} 
    </div>
  );
};

export default ItemListContainer;
