import React, { Component, Fragment } from 'react';
import ErrorIcon from "@material-ui/icons/ErrorOutline";

import Modal from '../../components/Modal/Modal';
import Button from "../../components/Buttons/Button/Button";


const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component{
        render(){
            return(
                <Fragment>
                    <Modal>
                        <ErrorIcon style={{fontSize:50, color:'#ff0000'}}/>
                        <p>Oops! Something went wrong...</p>
                        <Button btnType='Error'>
                            Try again!
                        </Button>
                    </Modal>
                    <WrappedComponent/>
                </Fragment>
            );
        };
    };
};

export default withErrorHandler;
