import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {allProductReducer} from './reducer/allProductReducer'

const reducer = combineReducers(
    {
        products: allProductReducer
    }
)
let initState = {};

const middleware = [thunk];

const store = createStore(reducer, initState, composeWithDevTools(applyMiddleware(...middleware))) ;

export default  store;