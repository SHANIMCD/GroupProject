import React from 'react';
import Button from 'react-bootstrap/Button';

class AboutCinema extends React.Component {


    render() {
        return (
        <div>
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
                <Button href="./ticketBookings" variant="dark">Book Now</Button>{' '} <br />
                <br /> <Button href="./filmClassification" variant="dark">Film Classifications</Button>{' '}
            </div>
        </div>
        )

    }
}

export default AboutCinema;
