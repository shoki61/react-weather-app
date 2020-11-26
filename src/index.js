import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducer from './store/reducers/weather';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
