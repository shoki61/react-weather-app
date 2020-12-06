import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import './SwitchButton.css';


const  SwitchLabels = props => {
    return(
        <FormGroup row>
            <FormControlLabel
                control={
                    <Switch
                        checked={props.checked}
                        onChange={props.clicked}
                        name="checkedB"
                        color='secondary'
                    />
                }
                classes={{
                    label:'Label'
                }}
                label="Light Mode"
            />
        </FormGroup>
    )
};

export default SwitchLabels;
