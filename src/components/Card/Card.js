import React from 'react';

import classes from './Card.css';

const card = (props) => {
    return (
        <div>
            <h1 className={classes.Card} > 
                {props.name}
            </h1>
        </div>
    )
}

export default card;