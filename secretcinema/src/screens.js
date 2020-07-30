import React from 'react';
import LargePhoto from './largePhoto';
import Button from 'react-bootstrap/Button';
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
            <div class="container" class="Lphoto">
                <div class="row">
                    <div class="col-md-6">

                        {/* <LargePhoto /> */}
                        <img src={this.state.imgList[this.state.index]}  alt="" />
                    </div>


                    <div class="col-md-6" className="info-col">



                        
                       

                        <p>
                            <h1>Standard Screens:</h1>
                            <p> View Stardard Screen Seating Plan <Button variant="dark" onClick={() => this.onClickSS(1)}>View</Button></p>
                            <p> View Stardarn Screen Decor<Button variant="dark" onClick={() => this.onClickSS(2)}>View</Button></p>
                            

                        </p>


                        <p>
                            <h1>Deluxe Screens:</h1>
                            <p> View Duluxe Screen Seating Plan <Button variant="dark"  onClick={() => this.onClickSS(3)}>View</Button></p>
                            <p> View Duluxe Screen Decor<Button variant="dark" onClick={() => this.onClickSS(4)}>View</Button></p>
                            
                        </p>
</div>
                    </div>
                </div>
        )
    }
}



export default Screens;