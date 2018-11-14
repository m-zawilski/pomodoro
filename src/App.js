import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import Settings from './Components/Settings/Settings';

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

	openSettings = () => {
		this.setState({isSettings: true});
	}

	closeSettings = () => {
		this.setState({isSettings: false});
	}

	//	Dehardcode it later
	saveSettings = (value) => {
		if (value.Pomodoro === 5){
			this.state.settings.Pomodoro = '0' + value.Pomodoro + '00';
		} else {
			this.state.settings.Pomodoro = value.Pomodoro + '00';
		}
		if (value['Short Break'] === 5){
			this.state.settings['Short Break'] = '0' + value['Short Break'] + '00';
		} else {
			this.state.settings['Short Break'] = value['Short Break'] + '00';
		}
		if (value['Long Break'] === 5){
			this.state.settings['Long Break'] = '0' + value['Long Break'] + '00';
		} else {
			this.state.settings['Long Break'] = value['Long Break'] + '00';
		}
	}

	constructor() {
		super();
		this.state = {
			timeSet: '2500',
			clock: '2500',
			isRunning: false,
			isSettings: false,
			settings: {
				Pomodoro: '2500',
				'Short Break': '0500',
				'Long Break': '1500'
			}
		}
	}

  render() {
    return (
      <div>
        <Settings
        	isSettings={this.state.isSettings}
        	closeSettings={this.closeSettings}
        	saveSettings={this.saveSettings}
        	settings={this.state.settings}
        	test={this.test}
        />
        <Header
        	openSettings={this.openSettings}
        />
        <Body 
        	clock={this.state.clock}
        	play={this.play}
        	pause={this.pause}
        	reset={this.reset}
        	changeTime={this.changeTime}
        	settings={this.state.settings}
        />
      </div>
    );
  }
}

export default App;
