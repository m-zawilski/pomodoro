import React, { Component } from 'react';
import './SettingsView.css';
import HeaderButton from '../Buttons/HeaderButton';
import Slider from '../Slider/Slider';

class SettingsView extends Component {

    stopPropagation = (event) => {
        event.stopPropagation();
    } 

    render() {
        const {closeSettings} = this.props;
        return (
            <div className='settingsView' onClick={this.stopPropagation}>
                <p>Pomodoro</p>
                <Slider/>
                <p>Short Break</p>
                <Slider/>
                <p>Long Break</p>
                <Slider/>
                <HeaderButton
                    buttonType='Accept'
                    onClick={closeSettings}
                />
            </div>
        );
    };
}

export default SettingsView;
