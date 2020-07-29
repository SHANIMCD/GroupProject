import React from 'react';
import axios from 'axios';
import PayBtn from './paypalComponent';
import PaypalBtn from 'react-paypal-checkout';
import { Link } from 'react-router-dom';
import { elementIsDisabled } from 'selenium-webdriver/lib/until';
//import Button from 'react-bootstrap/Button';

class ticketBookings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            booking: { movieTitle: "", date: "", time: "", customerName: "", numberOfSeats: 1, children: 0, adults: 0, concessions: 0 },
            adultTicket: { name: 'adult', price: ((parseFloat(12.50 * 100) / 100).toFixed(2)) },
            childTicket: { name: 'child', price: ((parseFloat(3.50 * 100) / 100).toFixed(2)) },
            concessionTicket: { name: 'concession', price: ((parseFloat(6.50 * 100) / 100).toFixed(2)) },    
            subtotal: null,
            payments: [],
            payment: { paymentID: '', paymentToken: '', address: { recipient_name: '' } },
            errMessage: {}
        }
    }
    
    handleChange = ({ currentTarget: input }) => {
        const booking = { ...this.state.booking };
        booking[input.name] = input.value;
        this.setState({ booking });

        let subArray = []      
        subArray.push(parseFloat(booking.children), parseFloat(booking.adults), parseFloat(booking.concessions))

        const subtotal = subArray.reduce(function(a, b, c) {
            return  (a + b + c)
        }, 0);
        this.setState({ subtotal: subtotal - 3 })
        console.log('total is: ' + (subtotal - 3))
    }
    
    checkInputs() {
    
      let formInput = this.state.booking
      if (this.state.subtotal != 0 && formInput.movieTitle != "" && formInput.customerName != "" && formInput.date != "" && formInput.time != "" && parseInt(formInput.numberOfSeats) === ((formInput.children/3.5) + (formInput.adults/12.5) + (formInput.concessions/6.5))){
        document.getElementById('paypal-btn').style.display = 'block'
        document.getElementById('check-input').innerText = 'Ready to checkout. Click pay to be sent to an external merchant'
       }
       else {
        window.addEventListener('DOMContentLoaded', () => {
            const ppBtn = document.getElementById('paypal-btn')
            ppBtn.style.display = 'none'
            document.getElementById('check-input').innerText = 'please fill all required fields to checkout.'
        })
       } 
    }

 
    render() {
        const {booking} = this.state;
        const onSuccess = (payment) => {
            // Congratulations, it came here means everything's fine!
            console.log("The payment has succeeded!", payment);
            this.setState({ payment: payment })
            const bookingForm = document.getElementById('booking-form')
            const movieBookTitle = document.getElementById('movieBookTitle')
            const bookingThanks = document.getElementById('booking-thanks')
            bookingThanks.style.display = 'block'
            bookingForm.style.display = 'none'
            movieBookTitle.innerText = 'Booking confirmed: '

          
            axios.post('http://localhost:5000/cinema/bookings', this.state.booking)
                .then((res) => {
                    console.log(res.data)
                }).catch((error) => {
                    console.log(error.response)
                });
        }

        const onCancel = (data) => {
            // User pressed "cancel" or close Paypal's popup!
            console.log('The payment was cancelled!', data);
        }

        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!", err);
        }
        
        let env = 'sandbox'; // you can set here to 'production' for production
        let currency = 'GBP'; // or you can set this value from your props or state  
        let total = this.state.subtotal;  // same as above, this is the total amount (based on currency) to be 
        let locale = 'en_GB';
        // For Customize Style: https://developer.paypal.com/docs/checkout/how-to/customize-button/
        let style = {
            'label': 'pay',
            'tagline': false,
            'size': 'medium',
            'shape': 'pill',
            'color': 'gold'
        };

        const client = {
            sandbox: 'AXIzbbkFFuxog3aKuvy6mveyEuYnlOhGwCbCtZ0AIdyarrfQywAmqPvbADwKvRAWmR2pwVCVrMlXjd9O',
            production: 'AXIzbbkFFuxog3aKuvy6mveyEuYnlOhGwCbCtZ0AIdyarrfQywAmqPvbADwKvRAWmR2pwVCVrMlXjd9O',
        }

        return (
            <div>
                <h1 id="movieBookTitle">Book a Film</h1>
                <form onChange={this.checkInputs()}  id="booking-form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="movieTitle">Movie Title: (required)</label>
                        <input onChange={this.handleChange} name="movieTitle" value={booking.movieTitle} id="movieTitle" type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Screen Date: (required)</label>
                        <input onChange={this.handleChange} name="date" value={booking.date} id="date" type="date" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="time">Screen Time: (required)</label>
                        <input onChange={this.handleChange} name="time" value={booking.time} id="time" type="time" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="customerName">Name: (required)</label>
                        <input onChange={this.handleChange} name="customerName" value={booking.customerName} id="customerName" type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="numberOfSeats">Number of seats: (must match total number of tickets)</label>
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
                        <label htmlFor="children">Children: (8 & under)</label>
                        <select onChange={this.handleChange} name="children" value={booking.children} id="children" type="select" className="form-control">
                            <option value={0}> 0 </option>
                            <option value={this.state.childTicket.price}> 1 </option>
                            <option value={this.state.childTicket.price * 2}> 2 </option>
                            <option value={this.state.childTicket.price * 3}> 3 </option>
                            <option value={this.state.childTicket.price * 4}> 4 </option>
                            <option value={this.state.childTicket.price * 5}> 5 </option>
                            <option value={this.state.childTicket.price * 6}> 6 </option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="adults">Adults</label>
                        <select onChange={this.handleChange} name="adults" value={booking.adults} id="adults" type="select" className="form-control">
                            <option value={0}> 0 </option>
                            <option value={this.state.adultTicket.price}> 1 </option>
                            <option value={this.state.adultTicket.price * 2}> 2 </option>
                            <option value={this.state.adultTicket.price * 3}> 3 </option>
                            <option value={this.state.adultTicket.price * 4}> 4 </option>
                            <option value={this.state.adultTicket.price * 5}> 5 </option>
                            <option value={this.state.adultTicket.price * 6}> 6 </option>  
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="concessions">Concession: (students, senior citizens)</label>
                        <select onChange={this.handleChange} name="concessions" value={booking.concessions} id="concessions" type="select" className="form-control" >
                        <option value={0}> 0 </option>
                            <option value={this.state.concessionTicket.price}> 1 </option>
                            <option value={this.state.concessionTicket.price * 2}> 2 </option>
                            <option value={this.state.concessionTicket.price * 3}> 3 </option>
                            <option value={this.state.concessionTicket.price * 4}> 4 </option>
                            <option value={this.state.concessionTicket.price * 5}> 5 </option>
                            <option value={this.state.concessionTicket.price * 6}> 6 </option>  
                        </select>

                    </div>                    
                    <div>
                        <p>Subtotal: {parseFloat(this.state.subtotal) === isNaN ? '' : <p>£{this.state.subtotal}</p>} </p>
                    </div>

                    <div id="paypal-btn">
                    <PaypalBtn
                    env={env}
                    client={client}
                    currency={currency}
                    total={total}
                    locale={locale}
                    style={style}
                    onError={onError}
                    onSuccess={onSuccess}
                    onCancel={onCancel} />
                    </div>
                    <span id="check-input"></span>
                    
                   
                    
              

                </form>
                <div style={{display: 'none'}} id="booking-thanks">
                    <p> Thank you for your booking, {this.state.payment.address.recipient_name}</p>
                    <p>Confirmation code: {this.state.payment.paymentToken}</p>
                    <button><Link to='/ticketBookings'>Book another ticket</Link></button>
                    <button><Link to='/'>Home page</Link></button>
                </div>

                <div>
                    {
                        this.state.payments.map(payment => (
                            <div key={payment.id}>
                                <p>Timestamp: {payment.create_time}</p>
                                <span>Made by: {payment.payer.payer_info.first_name}, </span>
                                <span>in the city of: {payment.payer.payer_info.shipping_address.city}</span>
                                <div>Total amount including fees and shipping:
                                    {
                                        payment.transactions.map(transaction => (
                                            <>
                                                <span> £{transaction.amount.total}</span>
                                            </>
                                        ))
                                    }
                                </div>
                                <br />
                                <br />
                            </div>

                        ))
                    }
                </div>
            </div>
        )
    }
}

export default ticketBookings;