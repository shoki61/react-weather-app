import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa'
import { connect } from 'react-redux';

import './CurrentWeather.css';
import Button from '../Buttons/Button/Button';
import Spinner from '../Spinner/Spinner';



const currentWeather = props => {
    let isFav = false;
    if(props.favorites.length){
        const favs = props.favorites.map(el => el.name);
        isFav = favs.includes(props.locationName);
    };

    return (
        <div className='Current-Weather-Card'>
            {props.currentData
                ? <div>
                    <p className='City-Name'>{props.locationName}</p>
                    <div className='Weather-Status'>
                        <div className='Time'>
                            <p>{new Date(props.currentData.dt * 1000).toLocaleTimeString().slice(0, -3)}</p>
                        </div>
                        <img src={require(`../../../src/assets/icons/${props.currentData.weather[0].icon}.png`).default} alt='icon'/>
                        <div>
                            <p className='Temp'>{Math.round(props.currentData.temp - 273.15)}°C</p>
                            <p className='Weather-Condition'>{props.currentData.weather[0].main}</p>
                        </div>
                    </div>
                    <div className='Weather-Details'>
                        <div className='Details'>
                            <p>Humidity: %{props.currentData.humidity}</p>
                            <p>Pressure: {props.currentData.pressure} hPa</p>
                        </div>
                        <div className='Details'>
                            <p>Wind: {Math.round(props.currentData.wind_speed * 3.6)} km/h</p>
                            <p>Clouds: %{props.currentData.clouds}</p>
                        </div>
                    </div>
                    <Button clicked={props.clicked} btnType='Add'>
                        {
                            isFav
                                ? <FaStar/>
                                : <FaRegStar/>
                        }
                    </Button>
                </div>
                : <Spinner/>
            }
        </div>
    )
};

const mapStateToProps = state => {
    return {
        favorites: state.favLocations.favorites
    };
};

export default connect(mapStateToProps)(currentWeather);
