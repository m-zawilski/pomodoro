import React, { Component } from 'react';
import './Slider.css';

const Slider = () => {
  	return (
        <div>
            <input 
            	type='range' 
            	className='slider'
            	min='1'
            	max='100'
            />
        </div>
    );
}

export default Slider;