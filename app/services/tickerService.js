import io from 'socket.io-client';
import {store} from '../index.js';
import {GET_TICKS} from '../actions/actionTypes';


let socket;

export const connectTicker = (stockSymbol) => {
    socket = io('http://localhost:4000');
    socket.on('connect', () => {
        console.log('connected');

        socket.on(stockSymbol, (data) => {
            console.log(data);

            store.dispatch({type: GET_TICKS,
                payload: {
                    tick: JSON.parse(data),
                }
            });
        });
        socket.emit('ticker', stockSymbol);
    });
};


export const disconnectTicker = () => {
    socket.disconnect();
    console.log('disconnected');
};
