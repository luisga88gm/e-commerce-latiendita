import {Fragment } from 'react';
import { useState} from 'react';

import ItemDetails from './ItemDetails';

import { useGetProductsFirebaseById } from "../../hooks/useProductFirebase";

import Spinner from '../loading/Spinner';

export default function ItemDetailsContainer(){
  const [loadig, setLoadig] = useState(true);
  const { product } = useGetProductsFirebaseById({setLoadig});

  if(loadig){
   return <Spinner/>
  }
  
  return (
      <Fragment>
        {product && <ItemDetails product={product} />}
      </Fragment>
  );
};