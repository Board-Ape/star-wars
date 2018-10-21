import React, {Component} from 'react';

import axios from 'axios';
import classes from './Display.css'
import CardContainer from '../CardContainer/CardContainer';

class Display extends Component {
    state = {
        people: null
    }

    componentDidMount () {
        axios.get('https://swapi.co/api/people/')
            .then(response => {
                this.setState({people: response.data.results})
            })
    }

    render () {
        return (
            <div className={classes.Display}>
                {this.state.people ? <CardContainer peopleArr={this.state.people}/> : null}
            </div>
        )
    }
}

export default Display;
