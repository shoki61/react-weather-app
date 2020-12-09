import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import { connect } from 'react-redux';

import './Home.css';
import '../../mode-css/Mode.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Buttons/Button/Button';
import * as actions from '../../store/actions/index';
import Favorites from '../../components/Favorites/Favorites';

class Home extends Component{

    state = {
        locationName:''
    };

    getWeatherHandler = () => {
        if(this.state.locationName !== ''){
            this.props.onSubmitLocation(this.state.locationName);
            this.props.history.push('/weather');
        };
    };

    getWeatherOnKeyPress = (event) => {
        if( event.keyCode === 13 ){
            if(this.state.locationName !== ''){
                this.props.onSubmitLocation(this.state.locationName);
                this.props.history.push('/weather');
            };
        };
    };

    getFavoriteDetails = name => {
        this.props.onSubmitLocation(name);
        this.props.history.push('/weather');
    }


    inputChangedHandler = event => {
        this.setState({locationName: event.target.value});
    };


    render(){
        const modeBackImg = this.props.mode ? 'Light-Mode-BackImg' : 'Dark-Mode-BackImg';
        return(
            <div className='Home'>
                <div className={['Back-Image',modeBackImg].join(' ')}> </div>
                <div style={this.props.favorites.length ? {paddingTop:100} : null} className='Home-Container'>
                    <h1 className='Title'>Weather is Life</h1>
                    <div className='Search-Input'>
                        <Input
                            mode={this.props.mode}
                            clicked={this.getWeatherOnKeyPress}
                            placeholder='Search location'
                            value={this.state.locationName}
                            changed={event => this.inputChangedHandler(event)}
                        />
                        <Button
                            clicked={this.getWeatherHandler}
                            btnType='Search'
                        >
                            <BsSearch/>
                        </Button>
                    </div>
                    {
                        this.props.favorites.length > 0
                            ? this.props.favorites.map((item,index) => (
                                <Favorites
                                    clicked={ ()=> this.props.onRemoveFavorites(index)}
                                    showFavoriteWeather={ ()=> this.getFavoriteDetails(item.name)}
                                    key={item.name}
                                    name={item.name}
                                    icon={item.icon}
                                    temp={item.temp}
                                />
                            ))
                            : null
                    }
                </div>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        favorites: state.favLocations.favorites
    };
};

const mapDispatchToProps = dispatch => {
    return{
        onSubmitLocation: location => dispatch(actions.fetchWeather(location)),
        onRemoveFavorites: index => dispatch(actions.removeFavorites(index)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
