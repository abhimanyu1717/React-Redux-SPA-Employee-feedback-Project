import React from 'react';
import FeedBackForm from './../emp-feedback/feedback-form';
import FeedBackList from './../emp-feedback/feedback-list';

export default class FeedBackHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'showFeedBackForm': true,
            'showFeedBackList': false,
            'feedbackList': []
        };
        this.saveFeedBack = this.saveFeedBack.bind(this);
        this.showFormAndListComponent = this.showFormAndListComponent.bind(this);
    }
    
    
    saveFeedBack = (feedbackObj) => {
        console.log('saveFeedBack -', feedbackObj);
        const loginApiUrl = 'http://my-json-server.typicode.com/abhimanyu1717/employeeFeedBackDB/employeesfeedback';
        /*
        this.setState(state => {
            const feedbackList = state.feedbackList.concat(feedbackObj);
            return {
                feedbackList,
                showFeedBackForm: false,
                showFeedBackList: true,
            };
        }); 
        */
        fetch(loginApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(feedbackObj)
        }).then(res => res.json()).then(res => console.log(res));
    }
    showFormAndListComponent(event) {
        event.preventDefault();
        if (event.target.name === 'form') {
            this.setState({ showFeedBackForm: true });
            this.setState({ showFeedBackList: false });
        } else {
            this.setState({ showFeedBackForm: false });
            this.setState({ showFeedBackList: true });
        }

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
                        <li><a href="" name="form" onClick={this.showFormAndListComponent} >New Feedback</a></li>
                        <li><a href="" name="list" onClick={this.showFormAndListComponent} >List</a></li>
                    </ul>
                </div>

                {this.state.showFeedBackForm && <FeedBackForm saveFeedBackCallBack={this.saveFeedBack} />}
                {this.state.showFeedBackList && <FeedBackList feedbackList={this.state.feedbackList} />}
            </div>
        );
    }
}
