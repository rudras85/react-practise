import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from './CounterControl/CounterControl';
import CounterOutput from './CounterOutput/CounterOutput';

class Counter extends Component {

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr}/>
                <CounterControl label='Increment' clicked={this.props.onIncrement} />
                <CounterControl label='Reset' clicked={this.props.onReset} />
                <CounterControl label='Add 5' clicked={this.props.onAdd} />
                <CounterControl />
            </div>
        );
    }
}

const mapStateToProps = state  => {
    return {
        ctr: state.counter
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch({type:'INCREMENT'}),
        onReset: () => dispatch({type:'RESET'}),
        onAdd: () => dispatch({type:'ADD', value:5})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);