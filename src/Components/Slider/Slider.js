import React from 'react';
import './Slider.css';

const Slider = ({name, value, changeValue, number}) => {
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
                number={number}
                onChange={changeValue}
            />
        </div>
    );
}

export default Slider;