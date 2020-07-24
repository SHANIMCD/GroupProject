import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import LargePhoto from './largePhoto';
class Screens extends React.Component {

    constructor() {
        super()
        //this.onClickForward = this.onClickForward.bind(this)
        //this.onClickBack = this.onClickBack.bind(this)
        var imgSrc = 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80';
        

        
        const imgSS = require('./images/standard-seating-plan.jpg');
        const imgSD = require('./images/standard-decor.jpg');
        const imgDS = require('./images/duluxe-seating-plan.png');
        const imgDD = require('./images/duluxe-decor.jpg')
        this.state = {
            index: 0,
            imgList: [imgSrc, imgSS, imgSD, imgDS, imgDD]
        }



        //onClickLoad() 


    }

    onClickSS(index) {
        this.setState({index: index});
        
    }
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-8">

                        {/* <LargePhoto /> */}
                        <img src={this.state.imgList[this.state.index]}  alt="" />
                    </div>



                    <div class="col-md-4">



                        
                       

                        <p>
                            <h1>Standard Screens:</h1>
                            <p> View Stardard Screen Seating Plan <button onClick={() => this.onClickSS(1)}>View</button></p>
                            <p> View Stardarn Screen Decor<button onClick={() => this.onClickSS(2)}>View</button></p>
                            

                        </p>


                        <p>
                            <h1>Deluxe Screens:</h1>
                            <p> View Duluxe Screen Seating Plan <button onClick={() => this.onClickSS(3)}>View</button></p>
                            <p> View Duluxe Screen Decor<button onClick={() => this.onClickSS(4)}>View</button></p>
                            
                        </p>
</div>
                    </div>
                </div>
        )
    }
}



export default Screens;