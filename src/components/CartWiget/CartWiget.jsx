//traido con rfce
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import * as iconList from "@fortawesome/free-solid-svg-icons"; 


function CartdWiget() {
  console.log (iconList);
  return (
    <div>
      
         <FontAwesomeIcon icon ={faShoppingCart}></FontAwesomeIcon>
    
    </div>
    )

}

export default CartdWiget