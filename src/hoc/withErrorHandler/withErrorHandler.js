import React, { Component, Fragment } from 'react';


import Modal from '../../components/Modal/Modal';


const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component{
        render(){
            return(
                <Fragment>
                    <Modal>

                    </Modal>
                    <WrappedComponent/>
                </Fragment>
            );
        };
    };
};

export default withErrorHandler;
