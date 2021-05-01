import React from 'react';
import "./Person.css"
const person = (props) => {
    return(
        <div className="Person">
            <p onClick={props.click}>
                I am a Person.
                My Name is {props.name}.
        I am {props.age} years old and not {Math.floor(Math.random()*30)}.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    );
}

export default person;
