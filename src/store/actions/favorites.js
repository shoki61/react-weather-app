import * as actionTypes from './actionTypes';
import axios from "../../axios-weather";
import {api, geocodeApi} from "../../APIKEY";


export const addFavorites = (favorite) => {
    return {
        type: actionTypes.ADD_FAVORITES,
        favorite: favorite
    };
};

export const removeFavorites = (index) => {
    return {
        type: actionTypes.REMOVE_FAVORITES,
        index: index
    };
};

export const removeAllFavorites = () => {
    return {
        type: actionTypes.REMOVE_ALL_FAVORITES
    };
};

export const getLocalStorageFavs = () => {
    return{
        type: actionTypes.GET_LOCALSTORAGE_FAVS
    };
};


export const fetchFavorite = (locationName) => {
    return dispatch => {
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${locationName}&key=${geocodeApi}`)
            .then(response => {
                const location = response.data.results[0].geometry.location;
                axios.get(`/onecall?lat=${location.lat}&lon=${location.lng}&appid=${api}`)
                    .then(response => {
                        const current = response.data.current
                        dispatch(addFavorites({
                            name: locationName,
                            icon: current.weather[0].icon,
                            temp: Math.round(current.temp - 273.15)
                        }));
                    })
                    .catch(error => error);
            })
            .catch(err => err);
    };
};

