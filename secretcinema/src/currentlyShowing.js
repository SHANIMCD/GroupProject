import React from 'react';
import axios from 'axios';
//import { Card, Button } from 'react-bootstrap';


class currentlyShowing extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            actors: '',
            director: '',
            year: '',
            poster: '',
            plot: '',
            rating: '',
            genres: '',
            runtime: ''

        }
    }

    componentDidMount() {
        const KEY = "d252c797";
        const returnID = 'tt0104039'
        axios.get("http://www.omdbapi.com/?apikey=" + KEY + "&i=" + returnID)
            .then((res) => {
                console.log(res);
                this.setState(
                    {
                        title: res.data.Title,
                        director: res.data.Director,
                        actors: res.data.Actors,
                        year: res.data.Year,
                        poster: res.data.Poster,
                        plot: res.data.Plot,
                        rating: res.data.imdbRating,
                        genres: res.data.Genre,
                        runtime: res.data.Runtime
                    })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>
                <img alt='' src={this.state.poster} />
                <p>Starring: {this.state.actors}</p>
                <p>Director: {this.state.director}</p>
                <p>Showing Times: </p>
            </div>
        )


    }
}



export default currentlyShowing; 
