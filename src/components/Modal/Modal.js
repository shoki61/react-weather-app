import React from 'react';

import './Modal.css';

const modal = props => (
    <div onClick={props.close} className='Modal'>
        <div className='Modal-Content'>
            {props.children}
        </div>
    </div>
);

export default modal;
