import React, {Component} from 'react';

class TwoWayBinding extends Component {

    state = {
        inputValue : "No value entered!!"
    }
    
    onChangeHandler(event) {
        this.setState({inputValue: event.target.value});
    }
    
    render() {
        return (
            <div className="Container">
                <h3>Two-way binding.</h3>
                <input type="text" onChange={this.onChangeHandler.bind(this)} />
                <span>{this.state.inputValue}</span>
            </div>
        );
    }
}

export default TwoWayBinding;