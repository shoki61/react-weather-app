import React, { Component } from 'react';

import './Weather.css';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import Forecast from '../../components/Forecast/Forecast';

class Weather extends Component{
    render(){
        return(
            <div className='Weather'>
                <div>
                    <div>input</div>
                    <div>Current weather</div>
                    <div>Forecast weather</div>
                </div>
            </div>
        )
    };
};

export default Weather;
