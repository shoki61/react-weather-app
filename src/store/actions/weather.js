import * as actionTypes from './actionTypes';
import axios from '../../axios-weather';


export const fetchWeatherStart = () => {
    return {
        type: actionTypes.FETCH_WEATHER_START
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
        dispatch(fetchWeatherStart())
        axios.get('/onecall?lat=33.441792&lon=-94.037689&appid=api')
            .then(response => {
                console.log(response)
                dispatch(fetchWeatherSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchWeatherFail(error))
            });
    };
};


