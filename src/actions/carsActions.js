import * as types from './actionTypes';

function url(){
    return "https://api.myjson.com/bins/kymrf";
}

export function receiveCars(json){
    return {type: types.RECEIVE_CARS, cars: json.cars};
}

export function fetchCars(){
    return dispatch => {
        return fetch(url(), {
            method : 'GET'
        })
        .then(response => response.json())
        .then(json => dispatch(receiveCars(json)))
    }
}