import React from 'react';
//import Button from 'react-bootstrap/Button';

class payments extends React.Component {
    state = {
        payment: {CardHolder: "", CardNumber: "", Expiry: "", SecurityNo: ""}
    }


    handleSubmit = e => {
        e.preventDefault();

        console.log("Submitted");
    }

    handleChange = ({currentTarget: input}) => {
        const payment = {...this.state.payment};
        payment[input.name] = input.value;
        this.setState({payment});
    }

    
    render() {

        const {payment} = this.state;
        return (
            <div>
                <h1> Payment Details</h1>
                <form onSubmit={this.handleSubmit}>

                <div className="form-group">
                        <label htmlFor="CardHolder">Card Holder Name</label>
                        <input onChange={this.handleChange} name = "CardHolder" value = {payment.CardHolder}id = "CardHolder"type="text" className="form-control"/>
                    </div>
                    

                <div className="form-group">
                        <label htmlFor="CardNumber">Card Number</label>
                        <input onChange={this.handleChange} name = "CardNumber" value = {payment.CardNumber} id ="MovieTitle"type="number" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Expiry">Expiry Date</label>
                        <input onChange={this.handleChange} name = "Expiry" value = {payment.Expiry}id = "Expiry"type="text" className="form-control"/>
                    </div>
                    

                <div className="form-group">
                        <label htmlFor="SecurtiyNo">Security Number</label>
                        <input onChange={this.handleChange} name = "SecurtiyNo" value = {payment.SecurtiyNo} id ="SecurtiyNo"type="number" className="form-control"/>
                    </div>
                    
                
                

                    <button className = "btn btn-primary"> Pay</button>
                </form>
            </div> 
        )
    }
}

export default payments;