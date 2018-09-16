import React from 'react';

const cockpit = (props) => {
    return (
        <div>
        <h1>Hi I am a react App</h1>
        <button onClick={props.clicked}>Toggle</button>
        </div>
    );
}

export default cockpit;