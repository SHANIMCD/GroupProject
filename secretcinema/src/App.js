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

function App() {
  return (


    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/releases" component={NewReleases} />
          <Route path="/showing" component={currentlyShowing} />
          <Route path="/screens" component={screens} />
          <Route path="/opentimes" component={OpeningTimes} />
          <Route path="/bookings" component={ticketBookings} />
        </Switch>
      </div>
    </BrowserRouter>
  )

  // return (
  //   <div className="App">
  //     <Navigation />
  //     <Homepage />

  //   </div>
  // );
}

export default App;
