import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { useFormCheckout } from '../../hooks/useProductFirebase';
import Spinner from '../loading/Spinner'
import Styles from '../../styles/itemCheckout.module.css'
import { Link } from 'react-router-dom';
//item buy
export default function ItemCheckout() {
  const { items } = useContext(CartContext)
  const { calculateTotal } = useContext(CartContext)
  const {finishedBuy} = useContext(CartContext)

  const [buyer, setBuyer] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [validateForm, setValidateForm] = useState(true)
  const total = (calculateTotal()).toFixed(3);

  const validateString = (event) => {
    const newValues = {
      ...buyer,
      [event.target.name]: event.target.value,
    }
    setBuyer(newValues)

  }

  const isValidateForm = ()=>{
    if(buyer.email.length >6 && buyer.repeat_email.length>6){
      if(buyer.email === buyer.repeat_email){
        return true;
      }else{
        return false;
      }
    }
  }

  const useFormSubmit = async (e) => {
    e.preventDefault();
    const validate = isValidateForm();
    if(validate){
      const date = new Date();
      setLoading(true);
      
      const user = {name:buyer.name,email:buyer.email,phone:buyer.phone}
      const order = {
        user, items: [...items],date
      }

      // eslint-disable-next-line react-hooks/rules-of-hooks
      setOrderId(await useFormCheckout(order));
      finishedBuy();
      setLoading(false); 
    }else{
      setValidateForm(false);
    }
     
    
  }

  if (loading) {
    return <Spinner />
  }

  return (

    <>
      {orderId && (
        <div className={Styles.order__container}>
          <div className={Styles.order__header}>
            <h2>Thanks for your purchase!</h2>
          </div>
          <div className={Styles.order__id}>
            <p>Order ID: <span>{orderId}</span></p>
          </div>
          <div className={Styles.order__button}>
            <Link to={'/home'}>Home</Link>
          </div>
        </div>
      )}
      {!orderId && (
        <div className={Styles.container__product}>
          <div className={Styles.container__form}>
            <form onSubmit={useFormSubmit}>
              <div className={Styles.form__group}>
                <label>Name</label>
                <input type="text" name="name" id="" placeholder='Name' onChange={validateString} required/>
              </div>
              <div className={Styles.form__group}>
                <label>Email</label>
                <input type="email" name="email" id="" placeholder='Email' onChange={validateString} required/>
              </div>
              <div className={Styles.form__group}>
                <label>Repeat Email</label>
                <input type="email" name="repeat_email" id="" placeholder='Repeat email' onChange={validateString} required/>
              </div>
              <div className={Styles.form__group}>
                <label>Phone</label>
                <input type="number" name="phone" id="" placeholder='Phone' onChange={validateString} required/>
              </div>
              <div className={Styles.form__group}>
                <button type='submit'>Buy</button>
              </div>
              {!validateForm &&(

                <div className={Styles.card__error}>
                  Email does not match
                </div>
              )}

            </form>

          </div>
          <div className={Styles.container__item}>
            <div className={Styles.item__header}>
              <h2>Products</h2>
            </div>
            {items && (
              <>
                <div className={Styles.items__list__container}>
                  {items.map(({ item }) => (
                    <Items key={item.id}
                      item={item}
                    />
                  ))}
                </div>
                <div className={Styles.item__list__total}>
                  <p>Total: ${total}</p>
                </div>
              </>
            )}

          </div>
        </div>
      )}
    </>
  )
}
const Items = ({ item }) => {
  return (
    <>
      <div className={Styles.item__list}>
        <div className={Styles.item__list__img}>
          <img src={item.img} alt="" />
        </div>
        <div className={Styles.item__list__product}>
          <p>{item.product}</p>
        </div>
        <div className={Styles.item__list__selected}>
          x{item.selected}
        </div>
        <div>
          {item.total}
        </div>

      </div>
    </>)
}



