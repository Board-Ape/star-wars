import React, {Component} from 'react';

import axios from 'axios';
import classes from './Display.css'
import CardContainer from '../CardContainer/CardContainer';

class Display extends Component {
    state = {
        people: null,
        error: null
    }

    componentDidMount () {
        axios.get('https://swapi.co/api/people/')
            .then(response => {
                this.setState({people: response.data.results})
            })
            .catch(error => {
                this.setState({error: error})
            })
    }

    searchUpdateHandler = (searchString) => {
        console.log(searchString)
    }

    render () {
        return (
            <div className={classes.Display}>
                {this.state.people 
                    ? <CardContainer
                        searchUpdate={this.searchUpdateHandler} 
                        peopleArr={this.state.people}/> 
                    : null}
            </div>
        )
    }
}

export default Display;
