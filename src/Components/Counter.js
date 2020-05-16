import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from './CounterControl/CounterControl';
import CounterOutput from './CounterOutput/CounterOutput';
import * as actionTypes from '../actions';

class Counter extends Component {

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr}/>
                <CounterControl label='Increment' clicked={this.props.onIncrement} />
                <CounterControl label='Reset' clicked={this.props.onReset} />
                <CounterControl label='Add 5' clicked={this.props.onAdd} />
                <button onClick={() => this.props.onStoreResults(this.props.ctr)}>Store Results</button>
                <ul>
                {this.props.results.map(item => (
                    <li onClick={() => this.props.onDeleteResult(item.id)}>{item.value}</li>
                ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state  => {
    return {
        ctr: state.ctr.counter,
        results: state.res.results
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch({type:actionTypes.INCREMENT}),
        onReset: () => dispatch({type:actionTypes.RESET}),
        onAdd: () => dispatch({type:actionTypes.ADD, value:5}),
        onDeleteResult: (deleteId) => dispatch({type:actionTypes.DELETE_RESULTS, resultsElId: deleteId}),
        onStoreResults: (result) => dispatch({type:actionTypes.STORE_RESULTS, result: result})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);