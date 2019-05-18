import {createStore, applyMiddleware} from 'redux'
import rootReducers from './index'
import thunk from 'redux-thunk'

const initialState = {};

const middleware = [thunk];

const store = createStore(rootReducers, initialState,applyMiddleware(...middleware)
,);

export default store;