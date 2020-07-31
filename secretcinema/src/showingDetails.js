import React from 'react';
import Card from "react-bootstrap/Card";
import Axios from 'axios';
const apiKey = '&apikey=f1887e96';

class showingDetails extends React.Component {

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

            <Card className ="page row">

            
            <Card.Img variant="top" alt='' src={this.state.poster} />
            <Card.Body>
            <Card.Title><h1>{this.state.title}</h1></Card.Title>
            <Card.Text>
            <p>Starring: {this.state.actors}</p>
            <p>Showing times: 10:00 & 15:00 </p>
            <p> {this.state.director === 'N/A' ? '' : <p>Director: {this.state.director}</p>} </p>
            </Card.Text>
            </Card.Body>
            </Card>
       </div>
        



        )
    }
}

export default showingDetails;