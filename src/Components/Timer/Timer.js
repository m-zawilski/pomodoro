import React, { Component } from 'react';
import './Timer.css';

const Timer = ({clock}) => {
    return (
      <div className='timer'>
      	{`${clock[0]}${clock[1]}:${clock[2]}${clock[3]}`}
      </div>
    );
}

export default Timer;
