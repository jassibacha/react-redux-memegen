import { combineReducers } from 'redux';
import memeReducer from './memeReducer';

const rootReducer = combineReducers({
    memes: memeReducer,
    // More reducers can go here
});

export default rootReducer;
