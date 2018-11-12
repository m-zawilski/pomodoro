import React, { Component } from 'react';
import './PomodoroBreakBar.css';
import BigButton from '../Buttons/BigButton';

const PomodoroBreakBar = ({changeTime}) => {
    return (
      <div className='PomodoroBreakBar'>
        	<BigButton 
        		buttonType='Pomodoro'
        		changeTime={changeTime}
                value={'2500'}
        	/>
        	<BigButton 
        		buttonType='Short Break'
        		changeTime={changeTime}
                value={'0500'}
        	/>
        	<BigButton 
        		buttonType='Long Break'
        		changeTime={changeTime}
                value={'1500'}
        	/>
      </div>
    );
}

export default PomodoroBreakBar;
