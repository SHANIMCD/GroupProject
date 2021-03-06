
import React from 'react';

import AboutCinema from './AboutCinema';

import OpeningTimes from './openingTimes';
import ticketBookings from './ticketBookings';
import filmClassification from './filmClassification';
import {Route, Switch } from 'react-router-dom';
import LargePhoto from './largePhoto';

class Homepage extends React.Component {


    render() {
        return (
            <div class = "container Lphoto">
            <div class = "row">

                <div class = "col-md-6" >
                
                <LargePhoto />
                </div>

                <div class = "col-md-6" className="info-col">
                <Switch>
            
             {/* <Route path="/screens" component={screens} /> */}
            <Route path="/opentimes" component={OpeningTimes} />
            <Route path="/ticketBookings" component={ticketBookings} />
            <Route path="/filmClassification" component={filmClassification} /> 
            
            <Route path="/" component={AboutCinema} />
          </Switch>
                

                </div>
                
                
            </div>

            </div>
        )
    }

}

export default Homepage;