import React from 'react';

const Person = (props) => {
    return (
        <div>
            Name: {props.name}, Age: {props.age}, Gender: {props.gender}
        </div>
    );
}

export default Person;