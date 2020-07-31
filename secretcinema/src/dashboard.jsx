import React from "react";
import {Link} from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import screens from './screens';
import OpeningTimes from './openingTimes';

const Dashboard = ({ match }) => {
    return (
        <div>
            <h1>Test 1</h1>
            <Route path="/dashboard/screens" component={screens} />
            <Route path="/dashboard/opentimes" component={OpeningTimes} />
        </div>
    )
};

export default Dashboard;
