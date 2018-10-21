import React, {Component} from 'react';

import classes from './CardContainer.css';
import Card from '../../components/Card/Card';
import titleURL from '../../assets/star-wars-logo.png'

class CardContainer extends Component {
    constructor (props) {
        super (props)
    }
    state = {
        userSearch: ''
    }

    updateUserSearchHandler = (event) => {
        this.setState({userSearch: event.target.value})
    }

    sendStringHandler = () => {
        const searchString = this.state.userSearch
        this.props.searchUpdate(searchString)
    }

    render () {
        const cards = this.props.peopleArr.map((person, index) => {
            return (
                <Card
                    key={index}
                    name={person.name}
                    gender={person.gender}
                    hair={person['hair_color']}
                    height={person.height}
                    mass={person.mass}
                />
            )
        });

        return (
            <div className={classes.Container}>
                <img alt={'Star Wars Title'} src={titleURL}/>
                <div>
                    <input 
                        value={this.state.userSearch}
                        onChange={this.updateUserSearchHandler}/>
                    <button onClick={this.sendStringHandler}>SUBMIT</button>
                </div>
                <div className={classes.CardContainer}>
                { cards }
                </div>
            </div>
        )
    }
}

export default CardContainer;

// (10)[{ … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }, { … }]
// 0:
// birth_year: "19BBY"
// created: "2014-12-09T13:50:51.644000Z"
// edited: "2014-12-20T21:17:56.891000Z"
// eye_color: "blue"
// films: (5)["https://swapi.co/api/films/2/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/", "https://swapi.co/api/films/7/"]
// gender: "male"
// hair_color: "blond"
// height: "172"
// homeworld: "https://swapi.co/api/planets/1/"
// mass: "77"
// name: "Luke Skywalker"
// skin_color: "fair"
// species: ["https://swapi.co/api/species/1/"]
// starships: (2)["https://swapi.co/api/starships/12/", "https://swapi.co/api/starships/22/"]
// url: "https://swapi.co/api/people/1/"
// vehicles: (2)["https://swapi.co/api/vehicles/14/", "https://swapi.co/api/vehicles/30/"]
// __proto__: Object
// 1: { name: "C-3PO", height: "167", mass: "75", hair_color: "n/a", skin_color: "gold", … }