import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BsSearch} from "react-icons/bs";

import './Weather.css';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import Forecast from '../../components/Forecast/Forecast';
import Input from '../../components/Input/Input';
import Favorites from '../../components/Favorites/Favorites';
import * as actions from '../../store/actions/index';
import Button from "../../components/Buttons/Button/Button";
import { changeFavStarHandler } from '../../helper/utility';



class Weather extends Component{

    state = {
        locationName: '',
        isFavorite: false,
    };

    componentDidMount() {
        setTimeout(()=>{
            this.setState({isFavorite: changeFavStarHandler(this.props.favorites, this.props.location)});
        },0);
    }

    addFavoritesHandler = () => {
        if(!changeFavStarHandler(this.props.favorites,this.props.location)){
            this.props.onAddFavorites(this.props.location)
        };
        setTimeout(()=>{
            this.setState({isFavorite: changeFavStarHandler(this.props.favorites, this.props.location)});
        },0);
    };

    removeFavoritesHandler = (index) => {
        this.props.onRemoveFavorites(index);
        setTimeout(()=>{
            this.setState({isFavorite: changeFavStarHandler(this.props.favorites, this.props.location)});
        },0);
    };

    removeAllFavoritesHandler = () => {
        this.props.onRemoveAllFavorites();
        this.setState({isFavorite: false});
    };

    getWeatherHandler = () => {
        if(this.state.locationName !== ''){
            this.props.onSubmitLocation(this.state.locationName);
            setTimeout(()=>{
                this.setState({isFavorite: changeFavStarHandler(this.props.favorites, this.props.location)});
            },0);
        };
    };

    inputChangedHandler = event => this.setState({locationName: event.target.value});

    render(){
        return(
            <div className='Weather'>
                <div className='Weather-Left-Layout'>
                    <div style={{display:'flex'}}>
                        <Input
                            value={this.state.locationName}
                            changed={event => this.inputChangedHandler(event)}
                            placeholder='Search city'
                        />
                        <Button
                            clicked={this.getWeatherHandler}
                            btnType='Search'
                        >
                            <BsSearch/>
                        </Button>
                    </div>
                    <CurrentWeather
                        clicked={this.addFavoritesHandler}
                        currentData={this.props.current}
                        locationName={this.props.location}
                        isFavorite={this.state.isFavorite}
                    />
                    { this.props.favorites.length ? <span>Favorite locations</span> : null }
                    {
                        this.props.favorites.length >= 2
                            ? <Button clicked={this.removeAllFavoritesHandler} btnType='Remove-All'>
                                Remove all
                              </Button>
                            : null
                    }
                    {
                        this.props.favorites.map((item,index) => (
                            <Favorites
                                clicked={()=> this.removeFavoritesHandler(index)}
                                key={item}
                                locationName={item}
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
        );
    };
};

const mapStateToProps = state => {
    return{
        current: state.weather.currentWeather,
        hourly: state.weather.hourlyForecast,
        weekly: state.weather.weeklyForecast,
        location: state.weather.location,
        favorites: state.favLocations.favorites,
        isFavorite: state.favLocations.isFavorite
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddFavorites: (location) => dispatch(actions.addFavorites(location)),
        onRemoveFavorites: (index) => dispatch(actions.removeFavorites(index)),
        onRemoveAllFavorites: () => dispatch(actions.removeAllFavorites()),
        onSubmitLocation: (location) => dispatch(actions.fetchWeather(location))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
