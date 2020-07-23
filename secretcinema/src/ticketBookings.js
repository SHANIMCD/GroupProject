import React from 'react';

class ticketBookings extends React.Component {
    email = React.createRef();


    handleSubmit = e => {
        e.preventDefault();

        console.log("Submitted");
    }

    
    render() {
        return (
            <div>
                <h1> Personal Details</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="FName">First Name</label>
                        <input id ="FName"type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="SName">Surname</label>
                        <input id = "SName"type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input ref={this.email} id="email" type ="text" className="form-control"/>
                    </div>
                    <button className = "btn btn-primary"> Book </button>
            
                   
                
                <h1> Payment Details</h1>
                
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