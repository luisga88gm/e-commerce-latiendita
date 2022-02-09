import { useEffect, useState } from "react";
import { productsAPI } from "../../helpers/promises";
import Item from "../item/Item";

const ItemListContainer = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const result = await productsAPI;
      setProducts(result);
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
      console.log("Finalización del consumo de la API productsAPI");
    }
  };

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  return (
    <div>
      <h1>Lista de productos</h1>
      <h3>Producto seleccionado</h3>
      <p>{selectedItem && selectedItem.name}</p>
      <p>{selectedItem && selectedItem.description}</p>
      <p>ID: {selectedItem && selectedItem.id}</p>
      <p>STOCK seleccionado: {selectedItem && selectedItem.stock}</p>
      <hr />
      {/* {products.map(({ id, name, description, stock }) => ( */}
      {products.map((product) => (
        <Item key={product.id} {...product} setSelectedItem={setSelectedItem} />
      ))}
    </div>
  );
};

export default ItemListContainer;
