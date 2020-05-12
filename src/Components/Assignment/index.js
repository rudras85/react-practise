import React, { Component } from 'react';
import UserInput from './UserInput';
import UserOutput from './UserOutput';
import withClass from "../hoc/withClass";

class Assignment extends Component {
    state = {
        output : "No output entered yet!!!"
    }

    onChangeHandler(event) {
        this.setState({
            output: event.target.value
        })
    }

    render() {
        return (
            <div className="Container">
                <h3>Assignment</h3>
                <UserInput onChangeHandler = {this.onChangeHandler.bind(this)} />
                <UserOutput output = {this.state.output} />
            </div>
        );
    }
}

export default withClass(Assignment, "Container");
//Here withClass is Higher order component