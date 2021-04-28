import {connectTicker, disconnectTicker} from '../services';
import {GET_TICKS, START_SOCKET, STOP_SOCKET} from './actionTypes';


export const getTicks = (tick) => {
    return {
        type: GET_TICKS,
        payload: {
            tick: tick,
        }
    };
};


export const startSocket = (stockSymbol) => (dispatch) => {
    console.log('inside the get ticker action');
    connectTicker(stockSymbol);
    dispatch({
        type: START_SOCKET,
    });
};


export const stopSocket = () => (dispatch) => {
    console.log('inside the stop ticker action');
    disconnectTicker();
    dispatch({
        type: STOP_SOCKET,
    });
};
