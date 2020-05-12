import React, { Component } from 'react';
import classes from '../../App.css';
import Persons from './Persons';
import Cockpit from './Cockpit';
import AuthConext from '../Context/auth-context';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log('[LifeCycle] constructor ');
        this.state = {
            persons: [
                { id: 'asfa1', name: 'Max', age: 28 },
                { id: 'vasdf1', name: 'Manu', age: 29 },
                { id: 'asdf11', name: 'Stephanie', age: 26 }
            ],
            otherState: "Some other value",
            showPersons: false,
            isAuth : false
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[LifeCycle] getDerivedStateFromProps', props);
        return state;
    }

    componentWillMount() {
        console.log('[LifeCycle] componentWillMount');
    }

    componentDidMount() {
        console.log('[LifeCycle] componentDidMount');
    }

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => p.id === id);
        const person =  {...this.state.persons[personIndex]};
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({persons: persons});
    }

    deletePerson = index => {
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({persons: persons});
    }

    togglePersons = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    authenticate = () => {
        this.setState({isAuth : true});
    }

    render() {
        console.log('[LifeCycle.js] render method');
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons = {this.state.persons}
                    clicked = {this.deletePerson}
                    changed = {this.nameChangeHandler}
                    isAuth = {this.state.isAuth}
                />
            )
        }
        return (
            <div className={classes.App}>
                <AuthConext.Provider value={{isAuth: this.state.isAuth, login: this.authenticate}}>
                    <Cockpit
                        title='Testing app'
                        showPersons={this.state.showPersons}
                        persons={this.state.persons}
                        clicked={this.togglePersons}
                    />
                    {persons}
                </AuthConext.Provider>
            </div>
        );
    }


}

export default LifeCycle;