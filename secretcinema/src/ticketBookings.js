import React from 'react';

class ticketBookings extends React.Component {
    state = {
        booking: {MovieTitle: "", ScreenDate: "", ScreenTm: "", NoSeats: ""}}


    handleSubmit = e => {
        e.preventDefault();

        console.log("Submitted");
    }

    handleChange = ({currentTarget: input}) => {
        const booking = {...this.state.booking};
        booking[input.name] = input.value;
        this.setState({booking});
    }

    
    render() {

        const {booking} = this.state;
        return (
            <div>
                <h1> Personal Details</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="MovieTitle">Movie Title</label>
                        <input onChange={this.handleChange} name = "MovieTitle" value = {booking.MovieTitle} id ="MovieTitle"type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="ScreenDate">Screen Date</label>
                        <input onChange={this.handleChange} name = "ScreenDate" value = {booking.ScreenDate}id = "ScreenDate"type="date" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="ScreenTm">Screen Time</label>
                        <input onChange={this.handleChange} name = "ScreenTm" value = {booking.ScreentTm}id="ScreenTm" type ="time" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="NoSeats">Number of seats</label>
                        <select ><option value = "1"> 1 </option> 
                        <option value = "2"> 2 </option> 
                        <option value = "3"> 3 </option> 
                        <option value = "4"> 4 </option> 
                        <option value = "5"> 5 </option> 
                        <option value = "6"> 6 </option>  
                        onChange={this.handleChange} name = "NoSeats" value = {booking.NoSeats} id="NoSeats" type ="select" className="form-control"/>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Children">Children</label>
                        <select ><option value = "1"> 1 </option> 
                        <option value = "2"> 2 </option> 
                        <option value = "3"> 3 </option> 
                        <option value = "4"> 4 </option> 
                        <option value = "5"> 5 </option> 
                        <option value = "6"> 6 </option>  onChange={this.handleChange} name = "NoSeats" value = {booking.Children} id="NoSeats" type ="select" className="form-control"/>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Adults">Adults</label>
                        <select ><option value = "1"> 1 </option> 
                        <option value = "2"> 2 </option> 
                        <option value = "3"> 3 </option> 
                        <option value = "4"> 4 </option> 
                        <option value = "5"> 5 </option> 
                        <option value = "6"> 6 </option>  onChange={this.handleChange} name = "NoSeats" value = {booking.Adults} id="Adults" type ="select" className="form-control"/>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Concessions">Concessions</label>
                        <select ><option value = "1"> 1 </option> 
                        <option value = "2"> 2 </option> 
                        <option value = "3"> 3 </option> 
                        <option value = "4"> 4 </option> 
                        <option value = "5"> 5 </option> 
                        <option value = "6"> 6 </option>  onChange={this.handleChange} name = "Concessions" value = {booking.Concessions} id="Concessions" type ="select" className="form-control"/>
                        </select>
                    </div>
                    <button className = "btn btn-primary"> Book </button>
                </form>
            </div> 
        )
    }
}

export default ticketBookings;