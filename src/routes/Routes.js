import { React} from 'react'
import { BrowserRouter,Route,Routes as Switch} from 'react-router-dom';
import ItemDetailsContainer from '../view/ItemDetails/ItemDetailsContainer';
import ItemListConteiner from '../view/ItemList/ItemListContainer';
import Header from '../layout/header/Header';
import Footer from '../layout/footer/Footer';
import ShoppingContainer from '../view/shopping/ShoppingContainer';
import ItemCheckout from '../view/ItemCheckout/ItemCheckout';

export default function Routes() {
    //const {getItems} = useContext(CartContext);

    
  return (

        <BrowserRouter>
            <Header/>
            <Switch>
            
                <Route path='/' element = {
              
                    <ItemListConteiner/>
                }/>
                <Route path='/home' element = {
                    <ItemListConteiner/>
                }/>
                    {/* Navbar*/}
{/*                 <Route path='/offers' element = {<p></p>}/>
                <Route path='/help' element = {<p></p>}/> */}
                <Route path='/contact' element = {<p></p>}/>
                    {/* Categories */}

                <Route path='/category/:category' element = {                    
                    <ItemListConteiner/>}
                />
                    {/* Item id */}

                <Route path='/item/:id' element={
                    <ItemDetailsContainer/>}
                /> 
                
                    {/* Navbar users */}
                <Route path='/cart' element = {<ShoppingContainer/>}/>
                <Route path='/checkout' element = {<ItemCheckout/>}/>

                <Route path='*' element={<h2>Not found</h2>}/>
            </Switch>
            <Footer/>
        </BrowserRouter>

  );
}
