import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import { connect } from 'react-redux';

import './Home.css';
import '../../mode-css/Mode.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Buttons/Button/Button';
import * as action from '../../store/actions/index';

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


    inputChangedHandler = event => {
        this.setState({locationName: event.target.value});
    };

    render(){
        const modeImg = this.props.mode ? 'Light-Mode-BackImg' : 'Dark-Mode-BackImg';
        return(
            <div className={['Home', modeImg].join(' ')}>
                <div style={{marginBottom:75}}>
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
                </div>
            </div>
        );
    };
};

const mapDispatchToProps = dispatch => {
    return{
        onSubmitLocation: location => dispatch(action.fetchWeather(location)),
    };
};

export default connect(null, mapDispatchToProps)(Home);
