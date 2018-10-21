import React from 'react';

import classes from './Card.css';

const card = (props) => {
    return (
        <div className={classes.Card} >
            <h2> 
                {props.name}
            </h2>
            <h5><strong>GENDER: </strong>{props.gender}</h5>
            <h5><strong>HAIR: </strong>{props.hair}</h5>
            <h5><strong>HEIGHT: </strong>{props.height} cm</h5>
            <h5><strong>MASS: </strong>{props.mass} kg</h5>
        </div>
    )
}

export default card;

// name = { person.name }
// gender = { person.gender }
// hair = { person['hair_color'] }
// height = { person.height }
// mass = { person.mass }