// src/reducers/index.js
import { combineReducers } from 'redux';
import memeReducer from './memeReducer';

const rootReducer = combineReducers({
    memes: memeReducer,
    // Add other reducers here as needed
});

export default rootReducer;
