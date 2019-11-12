import React from 'react';
import FeedBackForm from './../emp-feedback/feedback-form';
import FeedBackList from './../emp-feedback/feedback-list';
const initial_FeedbakList = [
    { 'empName': 'abhi', 'empId': '11', 'empProject': 'project1', 'comment': 'dff' },
    { 'empName': 'abhi2', 'empId': '12', 'empProject': 'project2', 'comment': 'dfffaaf' },
    { 'empName': 'abhi3', 'empId': '13', 'empProject': 'project3', 'comment': 'fasff' },
    { 'empName': 'abhi4', 'empId': '14', 'empProject': 'project1', 'comment': 'fffa' }
]
export default class FeedBackHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'showFeedBackForm': true,
            'showFeedBackList': false,
            'feedbackList': initial_FeedbakList
        };
        this.saveFeedBack = this.saveFeedBack.bind(this);
        this.showFormAndListComponent = this.showFormAndListComponent.bind(this);
    }

    saveFeedBack = (feedbackObj) => {
        console.log('saveFeedBack -', feedbackObj);
        this.setState(state => {
            const feedbackList = state.feedbackList.concat(feedbackObj);
            return {
                feedbackList,
                showFeedBackForm: false,
                showFeedBackList: true,
            };
          });
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