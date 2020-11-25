import React, { Component } from 'react';

import TabNavigator from '../TabNavigator/TabNavigator';
import './Forecast.css';

class Forecast extends Component{
    render(){
        return(
            <div>
                <TabNavigator/>
            </div>
        );
    };
};

export default Forecast;
