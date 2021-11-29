import {createStore, combineReducers, applyMiddleware} from 'redux';
import {thunk }from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {allProductReducer} from './reducer/allProductReducer'

const reducer = combineReducers(
    {
        products: allProductReducer
    }
)
let initialState = {};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware))) ;

export default  store;