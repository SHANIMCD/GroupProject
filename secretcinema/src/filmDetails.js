import React from 'react';
import Axios from 'axios';
const apiKey = '&apikey=f1887e96';

class filmDetails extends React.Component {

    constructor() {
        super()

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
        Axios.get(`http://www.omdbapi.com/? ${apiKey}+&i=+${this.props.match.params.id}`)
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
                <h1>{this.state.title}</h1>
                <img alt='' src={this.state.poster} />
                <p>Starring: {this.state.actors}</p>
                <p>Showing times: </p>
                <p> {this.state.director === 'N/A' ? '' : <p>Director: {this.state.director}</p>} </p>
            </div>
        



        )
    }
}

export default filmDetails;