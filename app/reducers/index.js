import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { stockTickerReducer } from './stockTickerReducer.js';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),

    stockTicker: stockTickerReducer,
});

export default createRootReducer;
