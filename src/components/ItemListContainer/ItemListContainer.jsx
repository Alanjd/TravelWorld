import React from 'react';
import Item from '../Item/Item';
import "./ItemListContainer.css";


function ItemListContainer() {
  return (
    <div className='ItemListContainer'>
     <Item className="item"  title="Bariloche" price={54654} imgurl="/img/bariloche.jpg"/>
     <Item className="item" title="Jujuy" price={4565} imgurl="/img/jujuy.jpg"/>
     <Item className="item" title="Mendoza" price={6646} imgurl="/img/mendoza.jpg"/>
    </div>
  )
}

export default ItemListContainer