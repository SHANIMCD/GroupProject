import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import filmDetails from './filmDetails';
const apiKey = 'apikey=f1887e96';

class NewReleases extends React.Component {

    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('http://www.omdbapi.com/?s=Batman&page=2&' + apiKey)
        .then((res) => { 
            console.log(res);
        this.setState({ data: res.data.Search });
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                 {
                    this.state.data.map(film => (
                        <div key={film.imdbID}>
                            <Link to={`/releases/${film.imdbID}`}>
                            <h2>{film.Title}</h2>
                            <h3>{film.Actors}</h3> 
                            <h3>{film.Director}</h3>
                            </Link>
                        </div>    
                    ))
                } 
            </div>
        )
    }
}     
export default NewReleases;




