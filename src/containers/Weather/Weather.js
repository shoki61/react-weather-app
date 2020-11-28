import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Weather.css';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import Forecast from '../../components/Forecast/Forecast';
import Input from '../../components/Input/Input';
import Favorites from '../../components/Favorites/Favorites';

class Weather extends Component{

    componentDidMount() {
        console.log(this.props.current)
    }

    render(){
        return(
            <div className='Weather'>
                <div className='Weather-Left-Layout'>
                    <Input placeholder='Search city'/>
                    <CurrentWeather
                        currentData={this.props.current}
                        locationName={this.props.location}
                    />
                    <span>Favorite locations</span>
                    <Favorites/>
                    <Favorites/>
                </div>
                <div className='Weather-Right-Layout'>
                    <Forecast
                        hourlyData={this.props.hourly}
                        weeklyData={this.props.weekly}
                        locationName={this.props.location}
                    />
                </div>

            </div>
        )
    };
};

const mapStateToProps = state => {
    return{
        current: state.currentWeather,
        hourly: state.hourlyForecast,
        weekly: state.weeklyForecast,
        location: state.location
    };
};

export default connect(mapStateToProps)(Weather);
