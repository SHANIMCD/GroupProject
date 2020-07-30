import React from 'react';
// import SearchBar from './SearchBar';
// import SearchResults from './SearchResults';
import axios from 'axios';
import { Alert } from 'react-bootstrap';

export default class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
            films: [],
            error: ""
        }
    }

    handleChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    }

    handleSearch = (event) => {
        event.preventDefault();
        axios.get(`http://www.omdbapi.com/?apikey=1f6a4f8a&s=${this.state.searchTerm}`)
            .then(response => {
                if (response.data.Error) {
                    this.setState({ error: response.data.Error });
                } else {
                    this.setState({ films: response.data.Search, error: "" });
                }
            }).catch(err => {
                console.error(err);
                this.setState({ error: err });
            });
    }

    getDetails = (id) => {
        console.log(id);
        this.props.history.push(`details/${id}`);
    }

    render() {
        return (
            <div>
                <SearchBar searchTerm={this.state.searchTerm} handleChange={this.handleChange} searchFunc={this.handleSearch} />
                {this.state.error ?
                    <Alert variant="danger" onClose={() => this.setState({ error: '' })} dismissible>
                        <Alert.Heading>{this.state.error}</Alert.Heading>
                    </Alert> : <SearchResults films={this.state.films} getDetails={this.getDetails} />
                }
            </div>)
    }

}