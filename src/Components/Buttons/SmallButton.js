import React from 'react';
import './SmallButton.css';

const Button = ({buttonType, onClick}) => {
    return (
      	<img
      		className='smallButton'
      		onClick={onClick}
      		src={`${buttonType}.svg`}
      		alt={`${buttonType} button`}>
      	</img>
    );
}

export default Button;
