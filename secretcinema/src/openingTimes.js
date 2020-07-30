import React from 'react';

class OpeningTimes extends React.Component {

    render() {
        return (
            <div class="row">
                <div class="col-md-8" >
                    <h1>Opening Times:</h1>
                    <p>
                        <table>
                            <tr><th>Sunday</th><td>Closed</td></tr>
                            <tr><th>Monday</th><td>9am - 5pm</td></tr>
                            <tr><th>Tuesday</th><td>9am - 5pm</td></tr>
                            <tr><th>Wednesday</th><td>9am - 5pm</td></tr>
                            <tr><th>Thursday</th><td>9am - 5pm</td></tr>
                        </table>
                    </p>
                </div>
            </div>
        )
    }
}

export default OpeningTimes;