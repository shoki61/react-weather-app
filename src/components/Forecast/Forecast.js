import React from 'react';

import TabNavigator from '../TabNavigator/TabNavigator';
import HourlyCard from './ForecastCards/HourlyCard/HourlyCard';
import WeeklyCard from './ForecastCards/WeeklyCard/WeeklyCard';
import './Forecast.css';

const forecast = props => (
    <div>
        <h2 className='Location-Name'>Trabzon/Tr</h2>
        <TabNavigator/>
        {props.hourlyData.map(item => (
            <HourlyCard
                id={item.dt}
                time={item.dt}
                temp={item.temp}
                pressure={item.pressure}
                humidity={item.humidity}
                clouds={item.clouds}
                wind={item.wind_speed}
                weather={item.weather}
            />
        ))}
        <WeeklyCard
            weeklyData={props.weeklyData}
        />
    </div>
);

export default forecast;
