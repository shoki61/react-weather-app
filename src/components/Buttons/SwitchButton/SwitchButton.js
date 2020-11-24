import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const  SwitchLabels = () => {
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <FormGroup row>
            <FormControlLabel
                control={
                    <Switch
                        checked={state.checkedB}
                        onChange={handleChange}
                        name="checkedB"
                        color="primary"
                    />
                }
                label="Light Mode"
            />
        </FormGroup>
    );
};

export default SwitchLabels;
