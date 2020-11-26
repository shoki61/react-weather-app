import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Weather.css';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import Forecast from '../../components/Forecast/Forecast';
import Input from '../../components/Input/Input';
import Button from '../../components/Buttons/Button/Button';
import Favorites from '../../components/Favorites/Favorites';
import Modal from '../../components/Modal/Modal';

class Weather extends Component{

    render(){
        return(
            <div className='Weather'>
                <div className='Weather-Left-Layout'>
                    <Input placeholder='Search city'/>
                    <CurrentWeather/>
                    <span>Favorite locations <strong>{this.props.name}</strong></span>
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

const mapStateToProps = state => {
    return{
        name: state.location
    };
};

export default connect(mapStateToProps)(Weather);
