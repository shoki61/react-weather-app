import * as actionTypes from './actionTypes';
import axios from '../../axios-weather';
import {api, geocodeApi} from '../../APIKEY';


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

export const errorConfirmed = () => {
    return{
        type: actionTypes.ERROR_CONFIRMED
    };
};

export const fetchWeather = (location) => {
    return dispatch => {
        dispatch(fetchWeatherStart(location))
        localStorage.setItem('locationName', location);
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${geocodeApi}`)
            .then(response => {
                console.log(response.data)
                const location = response.data.results[0].geometry.location;
                axios.get(`/onecall?lat=${location.lat}&lon=${location.lng}&appid=${api}`)
                    .then(response => {
                        dispatch(fetchWeatherSuccess(response.data))
                    })
                    .catch(error=> {
                        dispatch(fetchWeatherFail(error))
                    })
            })
            .catch(err => dispatch(fetchWeatherFail(err)))
    }
};


