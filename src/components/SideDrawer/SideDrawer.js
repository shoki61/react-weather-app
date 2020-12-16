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
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <p>Favorite locations</p>
                <Button clicked={props.onRemoveAllFavorites}>
                    Remove all
                </Button>
            </div>
            {
                props.favorites.map((item,index)=>(
                    <FavoriteItem
                        key={item.name}
                        name={item.name}
                        temp={item.temp}
                    />
                ))
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
        onRemoveAllFavorites:() => dispatch(actions.removeAllFavorites())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(sideDrawer);
