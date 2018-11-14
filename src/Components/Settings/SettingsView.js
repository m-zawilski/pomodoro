import React, { Component } from 'react';
import './SettingsView.css';
import HeaderButton from '../Buttons/HeaderButton';
import Slider from '../Slider/Slider';

class SettingsView extends Component {

    stopPropagation = (event) => {
        event.stopPropagation();
    } 

    changeValue = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    constructor() {
        super();
        this.state = {
            Pomodoro: 25,
            'Short Break': 5,
            'Long Break': 10
        }
    }

    render() {
        const {closeSettings, saveSettings} = this.props;
        return (
            <div className='settingsView'>
                <div onClick={this.stopPropagation}>
                    <Slider
                        name='Pomodoro'
                        value={this.state.Pomodoro}
                        changeValue={this.changeValue}
                    />
                    <Slider
                        name='Short Break'
                        value={this.state['Short Break']}
                        changeValue={this.changeValue}
                    />
                    <Slider
                        name='Long Break'
                        value={this.state['Long Break']}
                        changeValue={this.changeValue}
                    />
                </div>
                <HeaderButton
                    buttonType='Accept'
                    onClick={saveSettings(this.state)}
                />
            </div>
        );
    };
}

export default SettingsView;
