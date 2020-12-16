import React from 'react';
import { connect } from 'react-redux';

import FavoriteItem from './FavoriteItem/FavoriteItem';
import SwitchButton from '../Buttons/SwitchButton/SwitchButton';
import Button from '../Buttons/Button/Button';
import './SideDrawer.css';
import '../../mode-css/Mode.css';
import * as actions from '../../store/actions/index';

const sideDrawer = props => {
    let modeBackground = props.value ? 'Light-Mode-Background': 'Dark-Mode-Background';
    let attachedClasses = ['SideDrawer',modeBackground, 'Close'];
    if(props.show) attachedClasses = ['SideDrawer',modeBackground, 'Open'];
    const fetchFavoriteWeather = (name) => {
        props.onSubmitLocation(name);
        props.close();
    };
    return(
        <div
            className={attachedClasses.join(' ')}
        >
            <div className='Link-Mode-Container'>
                <a href='https://github.com/shoki61/react-weather-app' rel='noreferrer' target='_blank'>
                    <i className="fab fa-github"> </i>
                </a>
                <div style={{display:'flex',alignItems:'center'}}>
                    <SwitchButton checked={props.value} clicked={props.clicked}/>
                </div>
            </div>
            <div className='Remove-All-Container'>
                <p className='Favorites-Text'>Favorite locations</p>
                {
                    props.favorites.length > 1
                    ? <Button btnType='Remove-All' clicked={props.onRemoveAllFavorites}>
                            Remove all
                      </Button>
                    : null
                }
             </div>

            {
                props.favorites.length
                ? props.favorites.map((item,index)=>(
                        <FavoriteItem
                            key={item.name}
                            name={item.name}
                            temp={item.temp}
                            clicked={() => props.onRemoveFavorite(index)}
                            showFavoriteWeather={() => fetchFavoriteWeather(item.name)}
                        />
                  ))
                : <p className='No-Favorite-Message'>You don't have any favorite locations</p>
            }

        </div>
    )
};

const mapStateToProps = state => {
    return{
        favorites: state.favLocations.favorites
    };
};

const mapDispatchToProps = dispatch => {
    return{
        onRemoveAllFavorites:() => dispatch(actions.removeAllFavorites()),
        onRemoveFavorite: index => dispatch(actions.removeFavorites(index)),
        onSubmitLocation: location => dispatch(actions.fetchWeather(location))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(sideDrawer);
