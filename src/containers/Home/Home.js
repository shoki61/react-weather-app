import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import { connect } from 'react-redux';

import './Home.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Buttons/Button/Button';
import { fetchWeather } from '../../store/actions/index';


class Home extends Component{

    state = {
        locationName:''
    }

    getWeatherHandler = () => {
        //...
        this.props.onSubmit(this.state.locationName);
        this.props.history.push('/weather');
    };

    inputChangedHandler = event => {
        this.setState({locationName: event.target.value})
    }

    render(){
        return(
            <div className='Home'>
                <div style={{marginBottom:75}}>
                    <h1 className='Title'>Weather is Life</h1>
                    <div className='Search-Input'>
                        <Input
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
        onSubmit: (location) => dispatch(fetchWeather(location))
    };
};

export default connect(null, mapDispatchToProps)(Home);
