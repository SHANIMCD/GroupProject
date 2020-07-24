import React from 'react';
import axios from 'axios';
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/Card";
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
        axios.get('http://www.omdbapi.com/?s=harry+potter' + apiKey)
        .then((res) => { 
            console.log(res);
        this.setState({ data: res.data.Search });
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div className = "page">
                <Card>
                 {
                    this.state.data.map(film => (
                        
                        
                        <div key={film.imdbID}>
                            <Link
                            to={`/showing/${film.imdbID}`}>
                                
                               
                            <Card.Img variant="top" src={film.Poster} /> 
                            <Card.Body>
                            <Card.Title><h4>{film.Title}</h4></Card.Title>
                            </Card.Body>
                            
                            
                            </Link>

                        </div> 
                        
                        
                          
                    ))
                } 
                </Card>
            </div>
        )
    }
}     
export default NewReleases;




