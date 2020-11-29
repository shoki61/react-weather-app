import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Weather.css';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import Forecast from '../../components/Forecast/Forecast';
import Input from '../../components/Input/Input';
import Favorites from '../../components/Favorites/Favorites';
import * as actions from '../../store/actions/index';

class Weather extends Component{

    addFavoritesHandler = () => {
        this.props.onAddFavorites({
            location: this.props.location,
            id: this.props.location
        });
    };

    removeFavoritesHandler = () => {
        this.props.onRemoveFavorites();
    };

    removeAllFavoritesHandler = () => {
        this.props.onRemoveAllFavorites();
    };

    render(){
        return(
            <div className='Weather'>
                <div className='Weather-Left-Layout'>
                    <Input placeholder='Search city'/>
                    <CurrentWeather
                        clicked={this.addFavoritesHandler}
                        currentData={this.props.current}
                        locationName={this.props.location}
                    />
                    <span>Favorite locations</span>
                    {
                        this.props.favorites.map(item => (
                            <Favorites
                                id={item.id}
                                locationName={item.location}
                            />
                        ))
                    }
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
        current: state.weather.currentWeather,
        hourly: state.weather.hourlyForecast,
        weekly: state.weather.weeklyForecast,
        location: state.weather.location,
        favorites: state.favLocations.favorites
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddFavorites: (location) => dispatch(actions.addFavorites(location)),
        onRemoveFavorites: () => dispatch(actions.removeFavorites()),
        onRemoveAllFavorites: dispatch(actions.removeAllFavorites)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
