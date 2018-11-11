import React, { Component } from 'react';
import './Body.css';
import Timer from '../Timer/Timer';
import PlayPauseBar from '../PlayPauseBar/PlayPauseBar';
import PomodoroBreakBar from '../PomodoroBreakBar/PomodoroBreakBar';

const Body = ({clock, play, pause, reset}) => {
    return (
      	<div>
      		<PomodoroBreakBar/>
      		<Timer
	        	clock={clock}
        	/>
      		<PlayPauseBar 
      			play={play}
            pause={pause}
            reset={reset}
      		/>
      	</div>
    );
}

export default Body;
