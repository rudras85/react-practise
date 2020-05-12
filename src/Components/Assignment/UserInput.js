import React from 'react';

export default (props) => {

    return(
        <div>
            User input: <input type="text" onChange={props.onChangeHandler} />
        </div>
    );
};