import React from 'react'

import Aux from "../../hoc/Auxilary";
import classes from './Layout.css'


const layout = ( props ) => (
    <Aux>
        <div> menuha 3 components </div>
        <main className={classes.Content}>
         {props.children}
        </main>
    </Aux>
);

export default layout;
