import React, {Component} from 'react';

import axios from 'axios';

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
        console.log(this.state.people)
        return (
            <div>
            </div>
        )
    }
}

export default Display;
