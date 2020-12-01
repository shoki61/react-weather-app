import * as actionTypes from './actionTypes';
import axios from '../../axios-weather';
import {api} from '../../APIKEY';


export const fetchWeatherStart = (location) => {
    return {
        type: actionTypes.FETCH_WEATHER_START,
        location: location
    };
};

export const fetchWeatherSuccess = (data) => {
    return{
        type: actionTypes.FETCH_WEATHER_SUCCESS,
        data: data
    };
};

export const fetchWeatherFail = (error) => {
    return {
        type: actionTypes.FETCH_WEATHER_FAIL,
        error: error
    };
};

export const fetchWeather = location => {
    return dispatch => {
        dispatch(fetchWeatherStart(location));
        axios.get(`/onecall?lat=40.9861&lon=37.8797&appid=${api}`)
            .then(response => {
                localStorage.setItem('locationName', location);
                dispatch(fetchWeatherSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchWeatherFail(error))
            });
    };
};


