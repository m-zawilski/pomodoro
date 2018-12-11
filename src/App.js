import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import Settings from './Components/Settings/Settings';
import About from './Components/About/About'

class App extends Component {

	play = () => {
		if (!this.state.isRunning){
			this.setState({interval: setInterval(this.runClock, 1000)});	
			this.setState({isRunning: true});
		} 
	}

	pause = () => {
		clearInterval(this.state.interval);
		this.setState({isRunning: false});
	}

	reset = () => {
		const { settings, option } = this.state;
		this.setState({clock: settings[option]});
		this.pause();
	}

	runClock = () => {
		const {clock} = this.state;
		if (clock !== 0){
			this.setState({clock: clock-1});
		}
	}

	changeMode = (event) => {
		const mode = event.currentTarget.getAttribute('value');
		const { settings } = this.state;
		this.setState({option: mode, clock: settings[mode]});
		this.pause();
	}

	openSettings = () => {
		this.setState({isSettings: true});
	}

	closeSettings = () => {
		this.setState({isSettings: false});
	}

	openAbout = () => {
		this.setState({isAbout: true});
	}

	closeAbout = () => {
		this.setState({isAbout: false});
	}

	cancelSettings = () => {
		this.closeSettings();
		const { previousSettings } = this.state;
		this.setState({settings: previousSettings});
	}

	saveSettings = () => {
		this.closeSettings();
		const newSettings = this.state.settings;
		this.setState({previousSettings: newSettings});
		localStorage.setItem('pomodoroSettings', JSON.stringify(newSettings));
		localStorage.setItem('pomodoroOption', JSON.stringify(this.state.option));
		this.reset();
	}

 	changeValue = (number) => (event) => {
 			const { value } = event.target;
 			const newSettings = JSON.parse(JSON.stringify(this.state.settings));
 			newSettings[number] = Number(value*60);
      this.setState({settings: newSettings});
  }

	constructor() {
		super();
		this.state = {
			isRunning: false,
			isSettings: false,
			isAbout: false,
			settings: JSON.parse(localStorage.getItem('pomodoroSettings')) 
								|| [1500, 300, 600], //Pomodoro/Short Break/Long Break
			clock: JSON.parse(localStorage.getItem('pomodoroSettings'))[0] || 1500,															//all times are in seconds
			option: JSON.parse(localStorage.getItem('pomodoroOption'))
							 || 0,
			interval: {},
			previousSettings: [1500, 300, 600],
			sound: new Audio('./sounds/alarm.wav') || new Audio('./sounds/alarm.mp3')
		}
	}

  render() {
  	const { settings, isSettings, clock, sound, isAbout, option } = this.state;
  	if (clock === 0) {
  		sound.play();
  	} else {
  		sound.pause();
  	}
    return (
      <div>
        <Settings
        	isSettings={isSettings}
        	cancelSettings={this.cancelSettings}
        	settings={settings}
        	changeValue={this.changeValue}
        	saveSettings={this.saveSettings}
        />
        <About 
        	isAbout={isAbout}
        	closeAbout={this.closeAbout}
        />
        <Header
        	openSettings={this.openSettings}
        	openAbout={this.openAbout}
        />
        <Body 
        	clock={clock}
        	play={this.play}
        	pause={this.pause}
        	reset={this.reset}
        	changeMode={this.changeMode}
        	settings={settings}
        	currentMode={option}
        />
      </div>
    );
  }
}

export default App;
