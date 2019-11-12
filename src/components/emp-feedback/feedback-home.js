import React from 'react';
import FeedBackForm from './../emp-feedback/feedback-form';
export default class FeedBackHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.saveFeedBack = this.saveFeedBack.bind(this); 
    }

    saveFeedBack = (e) => {
        console.log('saveFeedBack -', e);
    }

    render() {
        return (
            <div className="container feedback-container container-border">
                <div className="row container-border">
                    <div className="col-md-5"><h4>Welcome John</h4></div>
                    <div className="col-md-7"><h4>Employee Screen</h4></div>
                </div>
                <div className="row">
                    <ul>
                        <li><a href="">New Feedback</a></li>
                        <li><a href="">List</a></li>
                    </ul>
                </div>
                <FeedBackForm  saveFeedBackCallBack = {this.saveFeedBack}/>
            </div>
        );
    }
}