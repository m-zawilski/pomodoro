import React, { Component } from 'react';
import './Body.css';
import Timer from '../Timer/Timer';
import PlayPauseBar from '../PlayPauseBar/PlayPauseBar';
import PomodoroBreakBar from '../PomodoroBreakBar/PomodoroBreakBar';
import Image from '../Image/Image';

const Body = ({clock, play, pause, reset, changeTime, settings}) => {
    return (
      	<div className="body">
      		<PomodoroBreakBar
            changeTime={changeTime}
            settings={settings}
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
