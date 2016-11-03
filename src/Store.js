import { createStore, combineReducers } from 'redux';

import Homepage from 'Routes/Homepage/Reducer.js';

const reducers = {
    Homepage
}

const store = createStore(combineReducers(reducers));

export default store;