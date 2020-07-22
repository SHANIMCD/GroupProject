import React from 'react';

class ticketBookings extends React.Component {
    email = React.createRef();


    handleSubmit = e => {
        e.preventDefault();

        console.log("Submitted");
    }

    handleChange = e => {
        const booking = {...this.state.payment};
        booking.input = e.currentTarget.value;
        this.setState({payment});
    }

    
    render() {
        return (
            <div>
                <h1> Payment Details</h1>
                <form onSubmit={this.handleSubmit}>
                    
                
                
                    <div className="form-group">
                        <label htmlFor="CDetails">Card Number</label>
                        <input id ="CDetails"type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="SNo">Security Number</label>
                        <input id = "SNo"type="text" className="form-control"/>
                    </div>
                    
                    <button className = "btn btn-primary"> Book </button>
                </form>
            </div> 
        )
    }
}

export default ticketBookings;