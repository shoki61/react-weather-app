import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BsSearch } from "react-icons/bs";
import ErrorIcon from "@material-ui/icons/ErrorOutline";

import './Weather.css';
import '../../mode-css/Mode.css';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import Forecast from '../../components/Forecast/Forecast';
import Input from '../../components/Input/Input';
import Favorites from '../../components/Favorites/Favorites';
import Button from "../../components/Buttons/Button/Button";
import Modal from "../../components/Modal/Modal";
import { changeFavStarHandler } from '../../helper/utility';
import * as actions from '../../store/actions/index';


class Weather extends Component{

    state = {
        locationName: ''
    };


    addFavoritesHandler = () => {
        if(!changeFavStarHandler(this.props.favs,this.props.location)){
           this.props.onAddFavorites({
                    name:this.props.location,
                    icon:this.props.current.weather[0].icon,
                    temp:this.props.current.temp
           });
        };
    };

    removeFavoritesHandler = (index) => {
        this.props.onRemoveFavorites(index);
    };

    removeAllFavoritesHandler = () => {
        this.props.onRemoveAllFavorites();
    };

    getWeatherHandler = () => {
        if(this.state.locationName !== ''){
            this.props.onSubmitLocation(this.state.locationName);
            this.setState({ locationName: ''})
        };
    };

    getWeatherOnKeyPress = (event) => {
        if( event.keyCode === 13 ){
            if(this.state.locationName !== ''){
                this.props.onSubmitLocation(this.state.locationName);
                this.setState({locationName: ''})
            };
        };
    };

    inputChangedHandler = event => this.setState({locationName: event.target.value});

    errorConfirmedHandler = () => this.props.onErrorConfirmed()

    render(){
        const modeBackImg = this.props.mode ? 'Light-Mode-BackImg' : 'Dark-Mode-BackImg';
        return(
            <div className='Weather'>
                {
                    this.props.error
                        ? <Modal close={this.errorConfirmedHandler}>
                            <ErrorIcon style={{fontSize:50, color:'#ff0000'}}/>
                            <p>Oops! Something went wrong...</p>
                            <Button clicked={this.errorConfirmedHandler} btnType='Error'>
                                Try again!
                            </Button>
                          </Modal>
                        : null
                }
                <div className={['Back-Image',modeBackImg].join(' ')}> </div>
                <div className='Weather-Left-Layout'>
                    <div style={{display:'flex'}}>
                        <Input
                            clicked={this.getWeatherOnKeyPress}
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
                        this.props.favorites.length > 0
                            ? this.props.favorites.map((item,index) => (
                                <Favorites
                                    clicked={()=> this.removeFavoritesHandler(index)}
                                    showFavoriteWeather={()=>this.props.onSubmitLocation(item.name)}
                                    key={item.name}
                                    name={item.name}
                                    icon={item.icon}
                                    temp={item.temp}
                                />
                            ))
                            : null
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
        favs:state.favLocations.favs,
        error: state.weather.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddFavorites: (favorite) => dispatch(actions.addFavorites(favorite)),
        onRemoveFavorites: (index) => dispatch(actions.removeFavorites(index)),
        onRemoveAllFavorites: () => dispatch(actions.removeAllFavorites()),
        onSubmitLocation: (location, favorites) => dispatch(actions.fetchWeather(location,favorites)),
        onErrorConfirmed: () => dispatch(actions.errorConfirmed())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
