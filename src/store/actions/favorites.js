import * as actionTypes from './actionTypes';


export const addFavorites = (location) => {
    return {
        type: actionTypes.ADD_FAVORITES,
        favorite: location
    };
};

export const removeFavorites = (location) => {
    return {
        type: actionTypes.REMOVE_FAVORITES,
        favorite: location
    };
};

export const removeAllFavorites = () => {
    return {
        type: actionTypes.REMOVE_ALL_FAVORITES
    };
};
