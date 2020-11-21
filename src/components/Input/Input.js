import React from 'react';

import './Input.css';

const input = props => (
    <input
        onChange={props.changed}
        value={props.value}
    />
);

export default input;
