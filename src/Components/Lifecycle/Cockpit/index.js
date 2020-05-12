import React, {Component} from 'react';
import classes from './index.css';
import AuthContext from '../../Context/auth-context';

class Cockpit extends Component {

    static contextType = AuthContext;

    render() {

        const assignedClasses = [];
        let btnClass = '';
        if (this.props.showPersons) {
            btnClass = "Red";
        }

        if ( this.props.persons.length <= 2 ) {
            assignedClasses.push( classes.red ); // classes = ['red']
        }
        if ( this.props.persons.length <= 1 ) {
            assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
        }

        return (
            <div className="Cockpit">
                <h1>{this.props.title}</h1>
                <p className={assignedClasses.join( ' ' )}>This is really working!</p>
                <button
                    className={btnClass}
                    onClick={this.props.clicked}>Toggle Persons</button>
                <button onClick={this.context.login}>Authenticate</button>

            </div>
        );
    }
}

export default Cockpit;