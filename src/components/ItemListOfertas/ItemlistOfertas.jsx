import React from 'react';
import Item from '../Item/Item';
//import "./ItemListContainer.css";


function ItemListOfertas() {
  return (
    <div className='ItemListContainer'>
     <Item  title="Bariloche" price={54654} imgurl="/img/bariloche.jpg"/>
     <Item  title="Jujuy" price={4565} imgurl="/img/jujuy.jpg"/>
     <Item  title="Mendoza" price={6646} imgurl="/img/mendoza.jpg"/>
    </div>
  )
}

export default ItemListOfertas