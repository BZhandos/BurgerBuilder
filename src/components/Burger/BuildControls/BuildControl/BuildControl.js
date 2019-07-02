import React from 'react'

import classes from './BuildControl.css'

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div>{props.label}</div>
        <button onClick={props.removed} disabled={props.disabled}>less</button>
        <button onClick={props.added}>more</button>
    </div>
);

export  default buildControl;
