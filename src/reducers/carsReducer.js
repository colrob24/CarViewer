import initialState from './initialState';
import {FETCH_CARS, RECEIVE_CARS} from '../actions/actionTypes';

export default function cars(state = initialState.cars, action){
    let newState;
    switch(action.type){
        case FETCH_CARS:
            console.log('FETCH_CARS Action');
            return action;
        case(RECEIVE_CARS):
            newState = action.cars;
            console.log('RECEIVE_CARS Action');
            return newState;
        default:
            return state;
    }
}