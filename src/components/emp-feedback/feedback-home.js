import React from 'react';
import { connect } from "react-redux";
import FeedBackForm from './../emp-feedback/feedback-form';
import FeedBackList from './../emp-feedback/feedback-list';
import { urlConfig } from './../../config/url-config';
class FeedBackHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'showFeedBackForm': true,
            'showFeedBackList': false
        };
        this.saveFeedBack = this.saveFeedBack.bind(this);
        this.showFormAndListComponent = this.showFormAndListComponent.bind(this);
    }


    saveFeedBack = (feedbackObj) => {
        console.log('saveFeedBack -', feedbackObj);
        const loginApiUrl = urlConfig().empFeedBack
    
        fetch(loginApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
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
                    <div className="col-md-5"><h4>{this.props.loginUser.name}</h4></div>
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

function mapStateToProps(state) {
    if (state.login && state.login.users && state.login.users.length > 0) {
        return { loginUser: state.login.users[0] }
    } else {
        return { loginUser: {} };
    }
}
export default connect(mapStateToProps)(FeedBackHome);