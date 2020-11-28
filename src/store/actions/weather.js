import * as actionTypes from './actionTypes';
import axios from '../../axios-weather';


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
        axios.get('/onecall?lat=40.9861&lon=37.8797&appid=65d6a7fd3ce6b78c501c67c41ae3e9b8')
            .then(response => {
                //console.log(response.data.current)
                dispatch(fetchWeatherSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchWeatherFail(error))
            });
    };
};


