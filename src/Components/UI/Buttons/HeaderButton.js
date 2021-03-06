import React from 'react';
import './HeaderButton.css';

const HeaderButton = ({buttonType, onClick}) => {
    return (
      	<img 
      		className='headerButton' 
      		onClick={onClick}
          src={`./img/${buttonType}.svg`}
          alt={`${buttonType} button`}>
        </img>
    );
}

export default HeaderButton;
