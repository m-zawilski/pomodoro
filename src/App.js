import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import Settings from './Components/Settings/Settings';

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
		const mode = event.target.value;
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

	cancelSettings = () => {
		this.closeSettings();
		const { oldSettings } = this.state;
		this.setState({settings: oldSettings});
	}

	saveSettings = () => {
		this.closeSettings();
		const newSettings = this.state.settings;
		this.setState({oldSettings: newSettings});
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
			settings: [1500, 300, 600],
			clock: 1500,
			option: 0,
			interval: {},
			oldSettings: [1500, 300, 600]
		}
	}

  render() {
  	const { settings, isSettings, clock } = this.state;
    return (
      <div>
        <Settings
        	isSettings={isSettings}
        	cancelSettings={this.cancelSettings}
        	settings={settings}
        	changeValue={this.changeValue}
        	saveSettings={this.saveSettings}
        />
        <Header
        	openSettings={this.openSettings}
        />
        <Body 
        	clock={clock}
        	play={this.play}
        	pause={this.pause}
        	reset={this.reset}
        	changeMode={this.changeMode}
        	settings={settings}
        />
      </div>
    );
  }
}

export default App;
