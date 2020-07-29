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
            
        this.setState({ data: res.data.Search });
        // index = res.data.Search.length;
        console.log(this.state);
        })
        .catch(err => console.log(err))
    }


    render() {
        return (
            <div class="container" >
            <div className ="page" className = "row" >
            
            
                
                 {
                     
                    this.state.data.map(film => (
                        <div className ="card-b">
                        <Card className="card">
                        <div key={film.imdbID} >
                            <Link
                            to={`/showing/${film.imdbID}`}>
                                
                               
                            <Card.Img  class="Imgfullpercent"variant="top" src={film.Poster} /> 
                            <Card.Body>
                            <h6>{film.Title}</h6>
                            </Card.Body>
                            
                            
                            </Link>

                        </div> 
                        
                        </Card>
                         </div> 
                    ))
                } 
                
                
            </div>
            </div>
        )
    }
}     
export default NewReleases;




