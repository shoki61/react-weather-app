import React from 'react';

import './Button.css';

const button = props => (
    <button onClick={props.clicked}>
        { props.children }
    </button>
);

export default button;
