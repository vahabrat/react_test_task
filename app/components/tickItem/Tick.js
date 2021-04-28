import React from 'react';
import PropTypes from 'prop-types';

export default function Tick({item}) {
    console.log(item);
    return (
        <div className = "ticker_container">
            <div className = {item.ticker === 'AAPL' ? 'ticker_item ticker_green' : 'ticker_item ticker_red'}>{item.ticker}</div>
            <div className = "ticker_item change">{item.change}</div>
            <div className = "ticker_item change_percent">{item.change_percent}</div>
            <div className = "ticker_item dividend">{item.dividend}</div>
            <div className = "ticker_item exchange">{item.exchange}</div>
            <div className = {item.price >= 200 ? 'ticker_item price_green' : 'ticker_item price_red'}>{item.price}</div>
            <div className = "ticker_item last_trade_time">{item.last_trade_time}</div>
        </div>
    );
}

Tick.propTypes = {
    item: PropTypes.object,
};

