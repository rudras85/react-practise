import React, { useState } from 'react';
import Person from './Persons';

export default (props) => {

    const [personState, setPersonState] = useState({
        persons : [
            { "name": "One", "age": 34, "gender": "Male"},
            { "name": "Two", "age": 32, "gender": "Female"},
            { "name": "Three", "age": 6, "gender": "Female"},
            { "name": "Four", "age": 4, "gender": "Male"}
          ]
        });

    const switchNameHandler = () => {
        const persons = personState.persons;
        persons.push({"name": "Test", "age": 12, "gender": "Male"})
        setPersonState({
          persons: persons
        });
    }

    return (
        <div className="Container">
          <h3>Functional component with useState hook</h3>
          <button onClick={switchNameHandler}>Add name</button>

          {
            personState.persons.map(person => {
              return <Person name={person.name} age={person.age} gender={person.gender} />
            })
          }
        </div>
    );
}