import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';

import './Home.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Buttons/Button/Button';


class Home extends Component{
    render(){
        return(
            <div className='Home'>
                <Input
                    placeholder='Search location'
                />
                <Button
                    btnType='Search'
                >
                    <BsSearch/>
                </Button>
            </div>
        );
    };
};

export default Home;
