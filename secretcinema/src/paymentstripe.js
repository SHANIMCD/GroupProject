import React from 'react';
import { CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
// import Button from 'react-bootstrap/Button';
class PaymentsForm extends React.Component {
    state = {
        payment: { CardHolder: '', CardNumber: '', Expiry: '', SecurityNo: '' },
    };
    handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
        const { stripe, elements } = this.props;
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });
        if (error) {
            console.log('Something went wrong', error);
        } else {
            console.log('Successful', paymentMethod);
        }
    };
    handleChange = ({ currentTarget: input }) => {
        const payment = { ...this.state.payment };
        payment[input.name] = input.value;
        this.setState({ payment });
    };
    render() {
        const { payment } = this.state;
        const { stripe } = this.props;
        return (
            <div>
                <h1> Payment Details</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="CardHolder">Card Holder Name</label>
                        <input
                            onChange={this.handleChange}
                            name="CardHolder"
                            value={payment.CardHolder}
                            id="CardHolder"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <button type="submit" className="btn btn-primary" disabled={!stripe}>
                        Pay
          </button>
                </form>
            </div>
        );
    }
}
const InjectedPaymentsForm = () => {
    return (
        <ElementsConsumer>
            {({ elements, stripe }) => (
                <PaymentsForm elements={elements} stripe={stripe} />
            )}
        </ElementsConsumer>
    );
};
export default InjectedPaymentsForm;