import React from 'react';

import './Modal.css';
import Button from '../Buttons/Button/Button';

const modal = props => (
    <div className='Modal'>
        <div>
            {props.children}
        </div>
        <Button>

        </Button>
    </div>
);

export default modal;
