import React, { Component } from 'react';
import './BigButton.css';

const Button = ({buttonType}) => {
    return (
      	<button className='headerButton' type='button'>{buttonType}</button>
    );
}

export default Button;
