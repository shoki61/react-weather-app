import * as actionTypes from './actionTypes';


export const addFavorites = (location) => {
    return {
        type: actionTypes.ADD_FAVORITES,
        favorite: location
    };
};

export const removeFavorites = (id) => {
    return {
        type: actionTypes.REMOVE_FAVORITES,
        id: id
    };
};

export const removeAllFavorites = () => {
    return {
        type: actionTypes.REMOVE_ALL_FAVORITES
    };
};
