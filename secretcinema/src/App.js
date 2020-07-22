import React from 'react';
import './App.css';
import Homepage from './homepage';
import Navigation from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import NewReleases from './newReleases';
import currentlyShowing from './currentlyShowing';
import screens from './screens';
import OpeningTimes from './openingTimes';
import ticketBookings from './ticketBookings';
import filmDetails from './filmDetails';
import filmClassification from './filmClassification';
import payments from './payment.js';

function App() {
  return (


    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/releases/:id" component={filmDetails} />
          <Route path="/releases" component={NewReleases} />
          <Route path="/showing" component={currentlyShowing} />
          <Route path="/screens" component={screens} />
          <Route path="/opentimes" component={OpeningTimes} /> 
          <Route path="/ticketBookings" component={ticketBookings} />
          <Route path="/filmClassification" component={filmClassification} />

          <Route path="/payments" component={payments} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
