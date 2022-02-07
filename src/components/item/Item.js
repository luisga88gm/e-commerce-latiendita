import ItemCounter from "../item-counter/ItemCounter";

const item = ({name, price, id, setSelectedItem}) => {
    const selectItem = () => setSelectedItem({name, price, id});

  return <div>
      <h2>Nombre del Producto: {name}</h2>
      <h2>Precio del Producto: {price}</h2>
      <button onClick={selectItem}>Seleccionar producto</button>
      <hr/>
      <ItemCounter stock={10} />
  </div>;
};

export default item;
