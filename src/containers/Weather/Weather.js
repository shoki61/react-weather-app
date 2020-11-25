import React, { Component } from 'react';

import './Weather.css';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import Forecast from '../../components/Forecast/Forecast';
import Input from '../../components/Input/Input';
import Button from '../../components/Buttons/Button/Button';
import Favorites from '../../components/Favorites/Favorites';

class Weather extends Component{

    render(){
        return(
            <div className='Weather'>
                <div className='Weather-Left-Layout'>
                    <Input placeholder='Search city'/>
                    <CurrentWeather/>
                    <span>Favorite locations</span>
                    <Favorites/>
                    <Favorites/>

                </div>
                <div className='Weather-Right-Layout'>
                    <Forecast/>
                </div>
            </div>
        )
    };
};

export default Weather;
