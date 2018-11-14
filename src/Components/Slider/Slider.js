import React, { Component } from 'react';
import './Slider.css';

const Slider = ({name, value, changeValue}) => {
  	return (
        <div className='sliderContainer'>
            <label 
                className='label'
            >
                {name} - {value} min
            </label>
            <input 
            	type='range' 
            	className='slider'
                name={name}
            	min='5'
            	max='60'
                step='5'
                defaultValue={value}
                onChange={changeValue}
            />
        </div>
    );
}

export default Slider;