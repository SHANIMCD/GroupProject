import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";
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
            <div class="container" >
                
           
               <div className="page row">

                    {
                        this.state.data.map(film => (
                            <div className="card-b">
                                <Card className="card">
                                    <div key={film.imdbID}>
                                        <Link
                                            to={`/releases/${film.imdbID}`}>
                                            <Card.Img src={film.Poster} />
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




