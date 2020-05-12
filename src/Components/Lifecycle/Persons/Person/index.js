import React, {useRef, useEffect, useContext} from 'react';
import PropTypes from 'prop-types';
import './index.css';
import withClass from "../../../hoc/withClass";
import AuthContext from "../../../Context/auth-context";


const Person = props => {

    const inputFocusRef = useRef(null);
    const context = useContext(AuthContext);

    useEffect(() => inputFocusRef.current.focus(), []);

    console.log("[Person] rendering...");
    return (
        <div className="Person">
            {/*<AuthContext.Consumer>*/}
            {/*    {(context) => context.isAuth ? <p>Authenticated!</p> : <p>Please Login></p>}*/}
            {/*</AuthContext.Consumer>*/}
            { context.isAuth ? <p>Authenticated!</p> : <p>Please Login></p>}
            <p onClick={props.click}>
                I am {props.name} and I am {props.age} old!
            </p>
            <p>{props.children}</p>
            <input type="text" ref={inputFocusRef} onChange={props.changed} value={props.name} />>
        </div>
    );
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default  withClass(Person, null);