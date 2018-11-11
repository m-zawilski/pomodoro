import React, { Component } from 'react';
import './BigButton.css';

const Button = ({buttonType, onClick}) => {
    return (
      	<button 
      		className='headerButton' 
      		type='button' 
      		onClick={onClick}>
      			{buttonType}
      		</button>
    );
}

export default Button;
