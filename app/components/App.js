import '../styles/application.scss';
// import {connectTicker} from '../services';
import React from 'react';

import {connect} from 'react-redux';
import {startSocket, stopSocket} from '../actions/stockTickerAction.js';
import Tick from './tickItem/Tick.js';
// The below line is here as an example of getting prices
import PropTypes from 'prop-types';
// connectTicker('AAPL');
class App extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div className="stock-ticker">
                <h1>Stock Blotter</h1>
                <div className = "button_container">
                    <button className = "button_start" onClick = {() =>{this.props.startSocket('AAPL');}}>Start ticking</button>
                    <button className = "button_stop" onClick = {() =>{this.props.stopSocket();}}>Stop ticking</button>
                </div>
                {this.props.tickers.map((item, index) => (<Tick item = {item} key = {index}/>))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.router.location);
    return {
        router: state.router.location,
        tickers: state.stockTicker.tickers,

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startSocket: (stockSymbol)=>dispatch(startSocket(stockSymbol)),
        stopSocket: ()=>dispatch(stopSocket()),
    };
};

App.propTypes = {
    router: PropTypes.boolean,
    startSocket: PropTypes.func,
    stopSocket: PropTypes.func,
    tickers: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
