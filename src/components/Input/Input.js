import React from 'react';

import './Input.css';

const input = props => {
    const modeColor = props.mode ? 'Light-Mode-Input' : 'Dark-Mode-Color';
    return(
        <input
            onKeyDown={props.clicked}
            className={['Input',modeColor].join(' ')}
            placeholder={props.placeholder}
            onChange={props.changed}
            value={props.value}
        />
    )
};

export default input;
