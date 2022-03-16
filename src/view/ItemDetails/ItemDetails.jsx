import React, { useContext } from 'react';
import Styles from '../../styles/itemBuy.module.css';
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';


//separar confirmar compra con item count
export default function ItemDetails({ product }) {
  const { addItem } = useContext(CartContext);

  return (
    <>
      {product.product && (
        <article className={Styles.itemCount__conteiner}>
          <ItemShopping product={product} />
          <div className={Styles.item__count}>
            <CountItem
              product={product}
              addItem={addItem}
            />
          </div>
        </article>
      )}

      {!product.product && (
        <div className={Styles.not__found}>
          <div>
            <h2>ERROR 404</h2></div>
          <div> 
            <p>Producto no encontrado</p>
          </div>
        </div>
      )}
    </>
  )
}

const ItemShopping = ({ product }) => {

  return (
    <div className={Styles.item__for__buy}>
      <div className={Styles.item__img}>
        <img src={product.img} alt="#" />
      </div>
    </div>
  )
}

const CountItem = ({ product, addItem }) => {

  const addCart = () => {
    addItem({
      item: {
        id: product.id,
        img: product.img,
        category: product.category,
        product: product.product,
        description: product.description,
        price: parseFloat(product.price),
        stock: product.stock,
        selected: 1,
        subtotal: parseFloat(product.price),
      }
    })
  };

  return (
    <>
      <div className={Styles.title__count}>
        <h2>{product.product}</h2>
        <h3>${product.price}</h3>
        <p>{product.description}</p>
      </div>

      <div className={Styles.icon__buy}>
        <Link to={'/cart'}><button onClick={addCart}>Agregar al Carrito</button></Link>
      </div>
    </>
  );
}