import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../helper/utility';

const initialState = {
    favs: [],
    favorites: []
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.ADD_FAVORITES:
            const newFavs = [...state.favorites];
            newFavs.unshift(action.favorite);
            const favs = newFavs.map(el => el.name);
            localStorage.setItem('favorites', JSON.stringify(favs));
            return updateObject(state,{
                favs: favs,
                favorites :newFavs
            });
        case actionTypes.REMOVE_FAVORITES:
            const newFavorites = state.favorites.filter((item,index) => index !== action.index);
            const newRemovedFavs = newFavorites.map(el => el.name);
            localStorage.setItem('favorites', JSON.stringify(newRemovedFavs));
            return updateObject(state,{
                favorites: newFavorites,
                favs:newRemovedFavs
            });
        case actionTypes.REMOVE_ALL_FAVORITES:
            localStorage.removeItem('favorites');
            return updateObject(state, {
                favorites: [],
                favs: []
            });
        case actionTypes.GET_LOCALSTORAGE_FAVS:
            const loadFavorite = JSON.parse(localStorage.getItem('favorites'));
            return updateObject(state,{
                favorites: loadFavorite
            });
        default: return state;
    };
};

export default reducer;
