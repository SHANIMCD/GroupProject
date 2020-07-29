import React from 'react';
import PaypalBtn from 'react-paypal-checkout';
import axios from 'axios';


export default class MyApp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            payments: [],

            sum: [],

            adultTicket: {
                    name: 'adult',
                    price: ((parseFloat(12.50 * 100) / 100).toFixed(2))
                },
                childTicket: {
                    name: 'child',
                    price: ((parseFloat(3.50 * 100) / 100).toFixed(2))
                },
               concessionTicket: {
                    name: 'concession',
                    price: ((parseFloat(6.50 * 100) / 100).toFixed(2))
                }

            
        }

        this.handleClicked = this.handleClicked.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        let selectedValue = e.target.value
        let newArray = []
        newArray.push(parseFloat(selectedValue))        

        const sum = newArray.reduce(function(a,b){
            return a + b
        }, 0);

        console.log(selectedValue, newArray, "sum = £" + sum.toFixed(2))
        console.log(sum)

        this.setState({ sum: sum })
    }

    // handleClicked() {
    //     const authToken = 'A21AAF8Fz4KiozNMi7LLCG4r9Nk6cdC908WHKsnekbofivFhpPt9yeRCtdhxjW9-hXuvNLB1p0cDbklVK5foz2RyzuV8S58Ew'
    //     axios.get('https://api.sandbox.paypal.com/v1/payments/payment?count=3&sort_by=create_time', {
    //         headers: { authorization: `Bearer ${authToken}` }
    //     })
    //         .then(res => this.setState({ payments: res.data.payments }))
    //         .catch(err => console.log(err))
    // }

    render() {
        const onSuccess = (payment) => {
            // Congratulation, it came here means everything's fine!
            console.log("The payment was succeeded!", payment);
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
        // let total = this.props.total;  // same as above, this is the total amount (based on currency) to be 
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
        // In order to get production's app-ID, you will have to send your app to Paypal for approval first
        // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"): 
        //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
        // For production app-ID:
        //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/		

        // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!		  
        return (

            <>
            {/* <div>
                <h2>Prices</h2>
                   <div name='items'>
                       <span>{this.state.adultTicket.name} </span>
                       <span value="">£{this.state.adultTicket.price}</span>
                    </div>
                    <div name='items'>
                       <span>{this.state.childTicket.name} </span>
                       <span  value="">£{this.state.childTicket.price}</span>
                    </div>
                    <div name='items'>
                       <span>{this.state.concessionTicket.name} </span>
                       <span  value="">£{this.state.concessionTicket.price}</span>
                    </div>
                
            </div>
*/}
            {/* <h3>Ticket</h3> */}

            {/* <select onChange={this.handleChange} name="items">
                <option value="All">Please Select</option>
                <option value={this.state.adultTicket.price}>Adult</option>
                <option value={this.state.childTicket.price}>child ticket (under 12)</option>
                <option value={this.state.concessionTicket.price}>Concession ticket</option>
            </select>  */}

                {/* <PaypalBtn
                    env={env}
                    client={client}
                    currency={currency}
                    // total={total}
                    locale={locale}
                    style={style}
                    onError={onError}
                    onSuccess={onSuccess}
                    onCancel={onCancel} /> */}
                {/* <button
                    onClick={this.handleClicked}
                >See Payments
                </button>

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
                </div> */}
            </>
        );
    }
}







