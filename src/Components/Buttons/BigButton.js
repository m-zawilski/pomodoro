import React, { Component } from 'react';
import './BigButton.css';

const Button = ({buttonType, changeTime, value}) => {

    return (
      	<button 
      		className='bigButton' 
      		type='button'
      		onClick={changeTime}
      		value={value}>
      			{buttonType}
      		</button>
    );
}

export default Button;
