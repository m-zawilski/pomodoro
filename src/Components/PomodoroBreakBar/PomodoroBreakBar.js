import React, { Component } from 'react';
import './PomodoroBreakBar.css';
import BigButton from '../Buttons/BigButton';

const PomodoroBreakBar = ({changeTime, settings}) => {
    return (
      <div className='PomodoroBreakBar'>
        	<BigButton 
        		buttonType='Pomodoro'
        		changeTime={changeTime}
                value={settings['Pomodoro']}
                color='dark'
        	/>
        	<BigButton 
        		buttonType='Short Break'
        		changeTime={changeTime}
                value={settings['Short Break']}
                color='light'
        	/>
        	<BigButton 
        		buttonType='Long Break'
        		changeTime={changeTime}
                value={settings['Long Break']}
                color='dark'
        	/>
      </div>
    );
}

export default PomodoroBreakBar;
