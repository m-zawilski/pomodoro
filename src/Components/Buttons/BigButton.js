import React, { Component } from 'react';
import './BigButton.css';

const BigButton = ({buttonType, changeTime, value, color}) => {
    return (
      	<button 
      		className={`bigButton ${color}`} 
      		type='button'
      		onClick={changeTime}
      		value={value}>
      			{buttonType}
      		</button>
    );
}

export default BigButton;
