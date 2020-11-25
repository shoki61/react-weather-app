import React from 'react';

import TabNavigator from '../TabNavigator/TabNavigator';
import HourlyCard from './ForecastCards/HourlyCard/HourlyCard';
import './Forecast.css';

const forecast = props => (
    <div>
        <TabNavigator/>
        <HourlyCard/>
        <HourlyCard/>
    </div>
);

export default forecast;
