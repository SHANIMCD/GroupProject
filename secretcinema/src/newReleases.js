import React from 'react';
import axios from 'axios';
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
// import filmDetails from './filmDetails';
const apiKey = '&apikey=f1887e96';

class NewReleases extends React.Component {

    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('http://www.omdbapi.com/?s=x-men' + apiKey)
        .then((res) => { 
            console.log(res);
        this.setState({ data: res.data.Search });
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div className = "page">
                 
                 {
                    this.state.data.map(film => (
                        <div className="card">
                        <div  key={film.imdbID}>
                            <Link
                            to={`/releases/${film.imdbID}`}>
                            <Card.Img alt='' src={film.Poster}/>    
                            <Card.Body>
                            <Card.Title><h2>{film.Title}</h2></Card.Title>
                            </Card.Body>
                            </Link>
                            </div>
                        </div>    
                    ))
                } 
               
            </div>
        )
    }
}     
export default NewReleases;




