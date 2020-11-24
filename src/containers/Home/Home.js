import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';

import './Home.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Buttons/Button/Button';


class Home extends Component{

    getWeatherHandler = () => {
        //...
        this.props.history.push('/weather');
    };

    render(){
        return(
            <div className='Home'>
                <div style={{marginBottom:75}}>
                    <h1 className='Title'>Weather is Life</h1>
                    <div className='Search-Input'>
                        <Input
                            placeholder='Search location'
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
