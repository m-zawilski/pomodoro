import React from 'react';
import './BigButton.css';

const BigButton = ({buttonType, changeMode, value}) => {
    return (
      	<img 
      		className={`bigButton`} 
      		type='button'
      		onClick={changeMode}
      		value={value}
      		src={`./img/${buttonType}.png`}
      		alt={`${buttonType} button`}/>
    );
}

export default BigButton;
