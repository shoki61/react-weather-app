import React from 'react';

import './Modal.css';

const modal = props => (
    <div className='Modal'>
        <div className='Modal-Content'>
            {props.children}
        </div>
    </div>
);

export default modal;
