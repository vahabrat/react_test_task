import {GET_TICKS, START_SOCKET, STOP_SOCKET} from '../actions/actionTypes.js';


const initialState = {
    tickers: []
};


export const stockTickerReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_SOCKET: {
            return {
                ...state,
            };
        }
        case STOP_SOCKET: {
            return {
                ...state,
            };
        }

        case GET_TICKS: {
            return {
                ...state,
                tickers: [...state.tickers, action.payload.tick]
            };
        }
        default:
            return state;
    }
};
