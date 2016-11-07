import { createStore, combineReducers } from 'redux';

import Homepage from 'Homepage/Reducer.js';
import Calculator from 'Calculator/Reducer.js';

const reducers = {
    Homepage,
    Calculator,
};

const store = createStore(combineReducers(reducers));

export default store;