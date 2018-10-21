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
        const noMatchData = [
            { 
                name: 'NO MATCH FOUND, PLEASE TRY ANOTHER',
                gender: 'n/a',
                hair_color: 'n/a',
                height: 'n/a',
                mass: 'n/a'
            }
        ]

        axios.get('https://swapi.co/api/people', {
                params: {
                    search: searchString
                }
            })
            .then(response => {
                if (response.data.count < 1) {
                    this.setState({people: noMatchData})
                } else {
                    this.setState({people: response.data.results})
                }
            })
            .catch(error => {
                this.setState({error: error})
            })
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
