import Item from './Item'
import Styles from '../../styles/itemList.module.css';

export default function ItemList({products}) {

  return (            
  <div className={Styles.conteiner__produc}>
    {products.map((product =>(
      <Item key={product.id} product = {product}/>
    )))}
    </div>);
}
