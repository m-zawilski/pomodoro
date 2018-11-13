import React, { Component } from 'react';
import './HeaderButton.css';

const HeaderButton = ({buttonType, onClick}) => {
    return (
      	<button 
      		className='bigButton' 
      		type='button'
      		onClick={onClick}
      		>
      			{buttonType}
      		</button>
    );
}

export default HeaderButton;
