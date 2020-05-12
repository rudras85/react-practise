import React, {useState} from 'react';

export default (props) => {

    const [flexiState, setFlexiState] = useState({
        persons: [
            {id: 1, name: 'One', age: 20},
            {id: 2, name: 'Two', age: 30},
            {id: 3, name: 'Three', age: 40},
        ]
    });
 
    const onNameChange = (event, id) => {
        const persons = flexiState.persons;
        const personIdx = persons.findIndex ( p => {
            return p.id == id;
        });
        const person = {...persons[personIdx]};
        person.name = event.target.value;
        persons[personIdx] = person;
        setFlexiState({persons: persons});
    }

    const onAgeChange = (event, id) => {
        const persons = flexiState.persons;
        const personIdx = persons.findIndex ( p => {
            return p.id == id;
        });
        const person = {...persons[personIdx]};
        person.age = event.target.value;
        persons[personIdx] = person;
        setFlexiState({persons: persons});
    }

    return (
        <div className="Container">
            <h3>FlexiList</h3>
            {flexiState.persons.map((item, idx) => {
                return <div>
                    {item.name}::{item.age}
                    <input key={item.id+'_name'} type="text" onChange={(event) => onNameChange(event, item.id)} />
                    <input key={item.id+'age'} type="text" onChange={(event) => onAgeChange(event, item.id)} />
                </div>
            })}
        </div>
    );
}