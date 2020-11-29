import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import weatherReducer from './store/reducers/weather';
import favoritesReducer from './store/reducers/favorites';

const rootReducer = combineReducers({
    weather:weatherReducer,
    favorites:favoritesReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
