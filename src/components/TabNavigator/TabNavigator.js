import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined'

import './TabNavigator.css';



const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width:500,
        maxWidth: '100%',
        backgroundColor:'transparent'
    },
    label: {
        fontSize:13,
        textTransform:'capitalize',
        color:'#aeaeae'
    }
});



export default function IconLabelTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper square className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="secondary"
                textColor="secondary"
                aria-label="icon label tabs example"
                className='Tabs'
            >
                <Tab className={classes.label} icon={<ScheduleOutlinedIcon/>} label="Hourly" />
                <Tab className={classes.label} icon={<CalendarTodayOutlinedIcon/>} label="Weekly" />
            </Tabs>
        </Paper>
    );
}
