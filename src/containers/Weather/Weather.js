import React, { Component } from 'react';

import './Weather.css';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import Forecast from '../../components/Forecast/Forecast';
import Input from '../../components/Input/Input';
import Button from '../../components/Buttons/Button/Button';

class Weather extends Component{
    render(){
        return(
            <div className='Weather'>
                <div className='Weather-Left-Layout'>
                    <Input/>
                    <CurrentWeather/>
                    <div>Favory</div>
                </div>
                <div className='Weather-Right-Layout'>
                    <div>Forecast</div>
                </div>
            </div>
        )
    };
};

export default Weather;
