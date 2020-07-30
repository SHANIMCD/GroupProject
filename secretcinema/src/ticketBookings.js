import React from 'react';

import axios from 'axios';



class ticketBookings extends React.Component {
    state = {

        booking: { movieTitle: "", date: "", time: "", customerName: "", numberOfSeats: "1", children: "1", adults: "1", concessions: "1" },
        errors: {}

    }

    handleSubmit = e => {
        e.preventDefault();


        axios.post('http://localhost:5000/cinema/bookings', this.state.booking)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error.response)
            });


    }

    handleChange = ({ currentTarget: input }) => {
        const booking = { ...this.state.booking };
        booking[input.name] = input.value;
        this.setState({ booking });

    }



    render() {

        const { booking } = this.state;

        return (
            <div>
                <h1>Book a Film</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">

                        <label htmlFor="movieTitle">Movie Title</label>
                        <input onChange={this.handleChange} name="movieTitle" value={booking.movieTitle} id="movieTitle" type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Screen Date</label>
                        <input onChange={this.handleChange} name="date" value={booking.date} id="date" type="date" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="time">Screen Time</label>
                        <input onChange={this.handleChange} name="time" value={booking.time} id="time" type="time" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="customerName">Name</label>
                        <input onChange={this.handleChange} name="customerName" value={booking.customerName} id="customerName" type="text" className="form-control" />
                    </div>
                    <div className="form-group">

                        <label htmlFor="numberOfSeats">Number of seats</label>
                        <select onChange={this.handleChange} name="numberOfSeats" value={booking.numberOfSeats} id="numberOfSeats" type="select" className="form-control">
                            <option value="1"> 1 </option>
                            <option value="2"> 2 </option>
                            <option value="3"> 3 </option>
                            <option value="4"> 4 </option>
                            <option value="5"> 5 </option>
                            <option value="6"> 6 </option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="children">Children</label>
                        <select onChange={this.handleChange} name="children" value={booking.children} id="children" type="select" className="form-control">
                            <option value="0"> 0 </option>
                            <option value="1"> 1 </option>
                            <option value="2"> 2 </option>
                            <option value="3"> 3 </option>
                            <option value="4"> 4 </option>
                            <option value="5"> 5 </option>
                            <option value="6"> 6 </option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="adults">Adults</label>
                        <select onChange={this.handleChange} name="adults" value={booking.adults} id="adults" type="select" className="form-control">
                            <option value="0"> 0 </option>
                            <option value="1"> 1 </option>
                            <option value="2"> 2 </option>
                            <option value="3"> 3 </option>
                            <option value="4"> 4 </option>
                            <option value="5"> 5 </option>
                            <option value="6"> 6 </option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="concessions">Concessions</label>
                        <select onChange={this.handleChange} name="concessions" value={booking.concessions} id="concessions" type="select" className="form-control" >
                            <option value="0"> 0 </option>
                            <option value="1"> 1 </option>
                            <option value="2"> 2 </option>
                            <option value="3"> 3 </option>
                            <option value="4"> 4 </option>
                            <option value="5"> 5 </option>
                            <option value="6"> 6 </option>
                        </select>

                    </div>

                    <button className="btn btn-success" type="submit">Book</button>


                </form>
            </div>
        )
    }
}

export default ticketBookings;