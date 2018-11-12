import React, { Component } from 'react';
import './Body.css';
import Timer from '../Timer/Timer';
import PlayPauseBar from '../PlayPauseBar/PlayPauseBar';
import PomodoroBreakBar from '../PomodoroBreakBar/PomodoroBreakBar';
import Image from '../Image/Image';

const Body = ({clock, play, pause, reset, changeTime}) => {
    return (
      	<div className="body">
      		<PomodoroBreakBar
            changeTime={changeTime}
          />
          <Image/>
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
