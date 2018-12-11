import React from 'react';
import './Slider.css';

const Slider = ({name, value, changeValue, number, maxValue, minValue, step}) => {
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
            	min={minValue}
            	max={maxValue}
                step={step}
                defaultValue={value}
                number={number}
                onChange={changeValue}
            />
        </div>
    );
}

export default Slider;