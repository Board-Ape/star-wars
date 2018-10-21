import React, {Component} from 'react';
import Sound from 'react-sound';

import classes from './CardContainer.css';
import Card from '../../components/Card/Card';
import titleURL from '../../assets/star-wars-logo.png';
import audioFile from '../../assets/star-wars-audio.mp3';

class CardContainer extends Component {
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
                    <Sound
                        url={audioFile}
                        playStatus={Sound.status.PLAYING}
                        playFromPosition={300 /* in milliseconds */}
                        onLoading={this.handleSongLoading}
                        onPlaying={this.handleSongPlaying}
                        onFinishedPlaying={this.handleSongFinishedPlaying}
                    />
                    <img alt={'Star Wars Title'} src={titleURL}/>
                    <section className={classes.Intro}>
                        A long time ago, in a galaxy far,<br/> far away....
                    </section>
                    <div className={classes.Board}>
                        <div className={classes.Content}>
                            <p className={classes.Title}>Armoire</p>
                            <p className={classes.Subtitle}>We believe...</p>
                            <br/>
                            <p>You are today's woman. The world cannot keep up with you. 
                                You run the show, get sh*t done, and take a stance. 
                                The power stance. You do not have the time for a dated 
                                and demanding shopping process. Scrolling, hunting, styling, 
                                no thank you.</p>
                            <br/>
                            <p>As a group of eclectic women ourselves (and a few kick-a** men), 
                                we understand what it means to be busy, social and simultaneously 
                                stylish. And we built a solution that finally keeps up.</p>
                            <br/>
                            <p>Go conquer the world — we will make sure you look damn good doing it.</p>
                            <br />
                            <p>Mission Statement Credit: Armoire (link: https://www.armoire.style/team/) </p>
                      </div>
                    </div>
                    <section className={classes.Outro}>
                        Scroll Down To Explore And Search For Characters
                    </section>
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