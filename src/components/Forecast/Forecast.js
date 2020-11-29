import React, { useState } from 'react';

import TabNavigator from '../TabNavigator/TabNavigator';
import HourlyCard from './ForecastCards/HourlyCard/HourlyCard';
import WeeklyCard from './ForecastCards/WeeklyCard/WeeklyCard';
import Spinner from '../Spinner/Spinner';
import './Forecast.css';

const Forecast = props => {

    const [value, setValue] = useState(0);

    const tabNavigatorHandler = value => {
        setValue(value);
    };

    let hourlyData = <Spinner/>;
    if(props.hourlyData){
        hourlyData = (
            props.hourlyData.map(item => (
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
            ))
        );
    };

    let weeklyData = <Spinner/>;
    if(props.weeklyData){
        weeklyData = (
            props.weeklyData.map(item => (
                <WeeklyCard
                    id={item.dt}
                    date={item.dt}
                    temp={item.temp}
                    pressure={item.pressure}
                    humidity={item.humidity}
                    clouds={item.clouds}
                    wind={item.wind_speed}
                    weather={item.weather}
                />
            ))
        )
    }


    return(
        <div>
            <h2 className='Location-Name'>{props.locationName}</h2>
            <TabNavigator
                changed={(_,value)=>tabNavigatorHandler(value)}
                value={value}
            />
            {value === 0
                ? hourlyData
                : weeklyData
            }

        </div>
    )
};

export default Forecast;
