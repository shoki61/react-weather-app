import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';

import './Home.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Buttons/Button/Button';


class Home extends Component{

    state = {
        locationName:''
    }


    getWeatherHandler = () => {
        //...
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

export default Home;
