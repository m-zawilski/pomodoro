import React, { Component } from 'react';
import './BigButton.css';

const BigButton = ({buttonType, changeTime, value}) => {
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

export default BigButton;
