import React, { Component } from 'react';
import './PomodoroBreakBar.css';
import BigButton from '../Buttons/BigButton';

const PomodoroBreakBar =  () => {
    return (
      <div className='PomodoroBreakBar'>
        	<BigButton buttonType='Pomodoro'/ >
        	<BigButton buttonType='Short Break'/ >
        	<BigButton buttonType='Long Break'/ >
      </div>
    );
}

export default PomodoroBreakBar;
