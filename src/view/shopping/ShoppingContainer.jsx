import { React, useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from "react-router-dom";

import Styles from '../../styles/CartShopping.module.css';

export default function ShoppingContainer() {

  const { items } = useContext(CartContext);
  const { removeItem } = useContext(CartContext);
  const { countBuys } = useContext(CartContext);
  const { addStockItem } = useContext(CartContext)
  const { subtractStockItem } = useContext(CartContext)
  const [finish, setFinish] = useState(false);

  const finishBuy = () => {
    setFinish(true);
  }

  const backToCart = () => {
    setFinish(false);
  }


  return (
    <div className={Styles.container__cart__shopping}>
      <div className={Styles.container__cart__header}>
        <h2>Productos: {countBuys}</h2>
        {items.length > 0 && (
          <Link to={`/checkout`}>
            <div className={Styles.finish__buy__button}>
              <button onClick={finishBuy}>Finalizar Compra!</button>
            </div>
          </Link>
        )}
      </div>

      <div className={Styles.container__cart}>
        {!finish && (
          <div className={Styles.container__cart__colum}>
            {items.length === 0 && (

              <div className={Styles.cart__empty}>
                <span>CARRITO VACIO! :</span>
              </div>

            )}
            {items.length > 0 && (
              <>
                {items.map(({ item }) => (
                  <ItemsCart key={item.id}
                    item={item}
                    addStockItem={addStockItem}
                    subtractStockItem={subtractStockItem}
                    removeItem={removeItem}
                  />
                ))}
              </>
            )}
          </div>
        )}
        {finish && (
          <div>
            <button onClick={backToCart}>To cart</button>
          </div>
        )}
      </div>
    </div>
  )
}
const ItemsCart = ({ item, addStockItem, subtractStockItem, removeItem }) => {
  const [stockSelected, setStockSelected] = useState(item.selected);
  const [total, setTotal] = useState(item.subtotal);
  const deleteItem = () => {
    removeItem(item);
  }

  const addStock = (e) => {
    e.preventDefault();
    if (item.selected < item.stock) {
      const itemModify = addStockItem(item);
      setStockSelected(itemModify.selected);
      setTotal(itemModify.subtotal)
    }

  };

  const subtractStock = (e) => {
    e.preventDefault();
    if (item.selected > 1) {
      const itemModify = subtractStockItem(item)
      console.log(itemModify)
      setStockSelected(itemModify.selected);
      setTotal(itemModify.subtotal)
    }
  };
  return (

    <div className={Styles.cart__item}>
      <div className={Styles.cart__item__img}>
        <img src={item.img} alt="#" />
      </div>
      <div className={Styles.cart__item__description}>
        <div>
          <h3>{item.product}</h3>
        </div>
        <div className={Styles.item__buttons}>
          <button onClick={subtractStock}>-</button>
          <span>{stockSelected}</span>
          <button onClick={addStock} >+</button>
        </div>
        <div>
          <span>Stock: {item.stock}</span>
        </div>
      </div>
      <div>
        <span className={Styles.item__price}>${total.toFixed(3)}</span>
      </div>
      <div className={Styles.button__delete}>
        <button onClick={deleteItem}>QUITAR</button>
      </div>
    </div>
  )

}
