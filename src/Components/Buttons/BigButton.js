import React from 'react';
import './BigButton.css';

const BigButton = ({buttonType, changeMode, value}) => {
    return (
      	<img 
      		className={`bigButton`} 
      		type='button'
      		onClick={changeMode}
      		value={value}
      		src={`./img/${''+buttonType}.svg`}
      		alt={`${buttonType} button`}/>
    );
}

export default BigButton;
