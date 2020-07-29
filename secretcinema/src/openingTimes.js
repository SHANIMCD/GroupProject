import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import LargePhoto from './largePhoto';
class OpeningTimes extends React.Component {

    render() {
        return (
            <div class="container" class="Lphoto">
            <div class="row">
                <div class="col-md-6">

                     <LargePhoto /> 
                    
                </div>
            
               <div class = "row">
                    
                <div class = "col-md-8" >
                    <h1>Opening Times:</h1>
                <p>
                <table>
<tr><th>Sunday</th><td>Closed</td></tr>
<tr><th>Monday</th><td>9am - 5pm</td></tr>
<tr><th>Tuesday</th><td>9am - 5pm</td></tr>
<tr><th>Wednesday</th><td>9am - 5pm</td></tr>
<tr><th>Thursday</th><td>9am - 5pm</td></tr>
</table>
                    {/* Monday
                    <br />11am-10pm
                  
                    <br />Tuesday
                    <br />11am-10pm
                    
                    <br />Wednesday
                    <br />11am-10pm
                    
                    <br />Thursday
                    <br />11am-11pm
                    
                    <br />Friday
                    <br />11am-midnight
                    
                    <br />Saturday
                    <br />11am-midnight
                    
                    <br />Sunday
                    <br />11am-10pm */}
                    
                </p>
                    </div>
                    </div>
                    </div>
                    </div>
           
        )
    }
}

export default OpeningTimes;