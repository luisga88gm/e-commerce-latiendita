import {useState} from "react";
import ItemList from './ItemList.jsx';
import Spinner from "../loading/Spinner.jsx";
import { useGetProductsFirebase } from "../../hooks/useProductFirebase";


export default function ItemListConteiner() {

    const [loadig, setLoadig] = useState(true);
    const {products} =useGetProductsFirebase({setLoadig});
    if(loadig){
        return <Spinner/>
    }
    
    return (
        <>
            {products &&(       
                <ItemList products = {products}/>     
            )}
        </>
    )
}
