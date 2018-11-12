import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';

class App extends Component {

	play = () => {
		if (!this.isRunning){
			this.interval = setInterval(this.runClock, 1000);	
			this.isRunning=true;
		}
	}

	pause = () => {
		clearInterval(this.interval);
		this.isRunning=false;
	}

	reset = () => {
		this.setState({clock: this.state.timeSet});
		this.pause();
	}

	runClock = () => {
		let {clock} = this.state;
		if (clock[0] !== '0' && clock[1] === '0' && clock[2] === '0' && clock[3] === '0'){
			this.setState({clock: `${clock[0]-1}959`});
		} else if (clock[1] !== '0' && clock[2] === '0' && clock[3] === '0'){
			this.setState({clock: `${clock[0]}${clock[1]-1}59`});
		} else if (clock[2] !== '0' && clock[3] === '0'){
			this.setState({clock: `${clock[0]}${clock[1]}${clock[2]-1}9`});
		} else if (clock[3] !== '0'){
			this.setState({clock: `${clock[0]}${clock[1]}${clock[2]}${clock[3]-1}`});
		} 
	}

	changeTime = (event) => {
		this.setState({timeSet: event.target.value});
		this.setState({clock: event.target.value});
		this.pause();
	}

	constructor() {
		super();
		this.state = {
			timeSet: '2500',
			clock: '2500',
			isRunning: false
		}
	}

  render() {
    return (
      <div>
        <Header/>
        <Body 
        	clock={this.state.clock}
        	play={this.play}
        	pause={this.pause}
        	reset={this.reset}
        	changeTime={this.changeTime}
        />
      </div>
    );
  }
}

export default App;
