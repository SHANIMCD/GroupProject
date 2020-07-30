import React from 'react';
import { SocialIcon } from 'react-social-icons';
import Card from "react-bootstrap/Card";

class AboutUs extends React.Component {

    render() {
        return (
            <div class="container">
                <h1 id="webTitle">Get in touch with the creators:</h1>
                <div className="page row">
                    <div className="card-b" >
                        <Card className="card">
                            <h1>Kärt Taevere:</h1>
                            <p>
                                <table>
                                    <tr><SocialIcon url="http://www.linkedin.com/in/KärtTaevere" />
                                        <SocialIcon url="http://www.twitter.com/vakationland" />
                                        <SocialIcon url="http://www.github.com/misstaevere" /></tr>
                                </table>
                            </p>
                        </Card>
                    </div>
                    <div className="card-b" >
                        <Card className="card">
                            <h1>Shani McDonald:</h1>
                            <p>
                                <table>
                                    <tr><SocialIcon url="https://www.linkedin.com/in/shanimcdonald/" />
                                        <SocialIcon url="http://www.twitter.com/SHANIMCD" />
                                        <SocialIcon url="http://www.github.com/SHANIMCD" /></tr>
                                </table>
                            </p>
                        </Card>
                    </div>
                </div>
                <div className="page row">
                    <div className="card-b" >
                        <Card className="card">
                            <h1>Naomi Gabriel:</h1>
                            <p>
                                <table>
                                    <tr>
                                        <SocialIcon url="http://www.linkedin.com/in/naomigabriel" />
                                        <SocialIcon url="http://www.github.com/ngabriel" /></tr>
                                </table>
                            </p>
                        </Card>
                    </div>
                    <div className="card-b" >
                        <Card className="card">
                            <h1>Rachel Chan:</h1>
                            <p>
                                <table>
                                    <tr><SocialIcon url="http://www.linkedin.com/in/rachelchan" />
                                        {/* <SocialIcon url="http://www.twitter.com/vakationland" /> */}
                                        <SocialIcon url="http://www.github.com/rachchan" /></tr>
                                </table>
                            </p>
                        </Card>
                    </div>
                </div >
            </div >
        )
    }
}

export default AboutUs;