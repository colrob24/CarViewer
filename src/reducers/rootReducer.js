import {combineReducers} from 'redux';
import cars from './carsReducer';

const rootReducer = combineReducers({
    cars
});

export default rootReducer;

