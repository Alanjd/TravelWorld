import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from "@fortawesome/free-solid-svg-icons";
import * as iconList from "@fortawesome/free-solid-svg-icons"; 

function login() {
    console.log(iconList)
  return (
    <div>
        
            <FontAwesomeIcon icon ={faUser} /> 
        
    </div>
  )
}

export default login