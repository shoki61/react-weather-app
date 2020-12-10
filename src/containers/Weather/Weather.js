import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BsSearch } from "react-icons/bs";
import ErrorIcon from "@material-ui/icons/ErrorOutline";
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';

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
        locationName: '',
        showBackToTopButton: false
    };


    addFavoritesHandler = () => {
        const favs = this.props.favorites.map(el => el.name)
        if(!changeFavStarHandler(favs,this.props.location)){
           this.props.onAddFavorites({
                    name:this.props.location,
                    icon:this.props.current.weather[0].icon,
                    temp:this.props.current.temp
           });
        };
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


    backToTop = () => window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

    handleScroll = () => {
        this.setState({ showBackToTopButton: window.scrollY > 600})
    };

    render(){
        window.addEventListener('scroll', this.handleScroll);
        const modeBackImg = this.props.mode ? 'Light-Mode-BackImg' : 'Dark-Mode-BackImg';
        return(
            <div className='Weather'>
                {
                    this.props.error
                        ? <Modal close={this.props.onErrorConfirmed}>
                            <ErrorIcon style={{fontSize:50, color:'#ff0000'}}/>
                            <p>Oops! Something went wrong...</p>
                            <Button clicked={this.props.onErrorConfirmed} btnType='Error'>
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
                    />
                    { this.props.favorites.length ? <span>Favorite locations</span> : null }
                    {
                        this.props.favorites.length >= 2
                            ? <Button clicked={this.props.onRemoveAllFavorites} btnType='Remove-All'>
                                Remove all
                              </Button>
                            : null
                    }
                    {
                        this.props.favorites.length > 0
                            ? this.props.favorites.map((item,index) => (
                                <Favorites
                                    clicked={()=> this.props.onRemoveFavorites(index)}
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

                    {
                        this.state.showBackToTopButton
                            ?<Button btnType='Back-To-Top' clicked={this.backToTop}>
                                <ExpandLessRoundedIcon/>
                            </Button>
                            : null
                    }

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
