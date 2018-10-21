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
                <div className={classes.Introduction}>
                    <img alt={'Star Wars Title'} src={titleURL}/>
                    <section className={classes.Intro}>
                        A long time ago, in a galaxy far,<br/> far away....
                    </section>
                    <div className={classes.Board}>
                        <div id="content">
                            <p id="title">Episode I</p>
                            <p id="subtitle">THE CODER'S MENACE</p>
                            <br/>
                            <p>Turmoil has engulfed the Galactic Republic as Christopher Kade finishes studying to become a master in his trade.</p>
                      </div>
                    </div>
                </div>
                <div>
                    <input 
                        placeholder={'Search'}
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