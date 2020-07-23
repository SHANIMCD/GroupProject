import React from 'react';
import Button from 'react-bootstrap/Button';
import AboutCinema from './AboutCinema';
import Navigation from './navbar';
import screens from './screens';
import OpeningTimes from './openingTimes';
import ticketBookings from './ticketBookings';
import filmClassification from './filmClassification';
import {Route, Switch } from 'react-router-dom';

class Homepage extends React.Component {


    render() {
        return (
            <div class = "container">
            <div class = "row">

                <div class = "col-md-8">
                
                <img alt='' src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80"/>
                
                </div>

                <div class = "col-md-4">


                
                <Switch>
            
             <Route path="/screens" component={screens} />
            <Route path="/opentimes" component={OpeningTimes} />
            <Route path="/ticketBookings" component={ticketBookings} />
            <Route path="/filmClassification" component={filmClassification} /> 
            
            <Route exact path="/" component={AboutCinema} />
          </Switch>
                


            

                </div>
                
                
            </div>

            </div>
        )
    }

}

export default Homepage;