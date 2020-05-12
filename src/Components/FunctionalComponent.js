import React, { Component} from 'react';

import Person from './Persons';

class FunctionalComponent extends Component {

    state = {
      persons : [
        { "name": "One", "age": 34, "gender": "Male"},
        { "name": "Two", "age": 32, "gender": "Female"},
        { "name": "Three", "age": 6, "gender": "Female"},
        { "name": "Four", "age": 4, "gender": "Male"}
      ],
      showPersons : false
    }
  
    switchNameHandler = () => {
      const persons = this.state.persons;
      persons.push({"name": "Test", "age": 12, "gender": "Male"})
      this.setState({
        persons: persons
      });
    }

    togglePersons = () => {
      const doesShow = !this.state.showPersons;
      this.setState({
        showPersons : doesShow
      })
    }
  
    render() {
      return (
        <div className="App">
  
          <div className="Container">
            <h3>Functional component</h3>
            <button onClick={this.togglePersons}>Toggle Persons</button>
  
            { this.state.showPersons ? 
              this.state.persons.map(person => {
                return <Person name={person.name} age={person.age} gender={person.gender} />
              }) : null
            }
          </div>
        </div>
      );
    }
    
}
  
export default FunctionalComponent;