import React from 'react';
import Person from './Person';

export default (props) => {
    console.log("[Persons] rendering...");
    return props.persons.map((person, index) => {
        return <Person
            click = {() => props.clicked(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed = { event => props.changed(event, person.id) }
            isAuth = {props.isAuth}
        />
    });
}