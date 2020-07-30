import React from 'react';
import './App.css';
import Homepage from './homepage';
import Navigation from './navbar';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewReleases from './newReleases';
import currentlyShowing from './currentlyShowing';
import screens from './screens';
import OpeningTimes from './openingTimes';
import ticketBookings from './ticketBookings';
import filmDetails from './filmDetails';
import filmClassification from './filmClassification';
import payments from './paymentstripe';
import showingDetails from './showingDetails';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51H7dpPFEKVCuEdPWzui5c4xHNkpElRrDnxWnQTE669HftNqsBLDs33ORBqUMqjsnBtXRLsjMe89JsYgnuhMH1bI400w2Qua18A');

function App() {
  return (

        
    <Elements stripe={stripePromise}>
      <BrowserRouter>
      <div className = "wrapper">
          <Navigation />

          <Switch>
            <Route path="/showing/:id" component={showingDetails} />
            <Route path="/showing" component={currentlyShowing} />
            <Route path="/screens" component={screens} />
            <Route path="/opentimes" component={OpeningTimes} />
            <Route path="/ticketBookings" component={ticketBookings} />
            <Route path="/filmClassification" component={filmClassification} />
            <Route path="/payments/stripe" component={payments} />
            <Route path="/releases/:id" component={filmDetails} />
            <Route path="/releases" component={NewReleases} />    
            <Route path="/" component={Homepage} />
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    </Elements >
  );

}

export default App;