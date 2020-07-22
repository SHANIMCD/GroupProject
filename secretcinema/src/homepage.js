import React from 'react';
import Button from 'react-bootstrap/Button';

class Homepage extends React.Component {


    render() {
        return (
            <div class = "container">
            <div class = "row">

                <div class = "col-md-8">
                <img alt='' src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80"/>
                </div>

                <div class = "col-md-4">
                <h1>About Secret Cinema</h1>
                <br />
                <p>
                Secret Cinema is the first ever 
                <br /> cinema in London, opened in 1949
                <br /> by Hollywood director Walter 
                <br /> Franklin. It is located in the heart 
                <br /> of Piccadilly Circus.
                </p>
                    <div>
                    <Button variant="dark">Book Now</Button>{' '} <br />
                    <br /> <Button href="./filmClassification" variant="dark">Film Classifications</Button>{' '} 
                    </div>
                </div>
                
                
            </div>

            </div>
        )
    }

}

export default Homepage;