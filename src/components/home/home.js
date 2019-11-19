import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {connect} from "react-redux";

/*component */
import FeedBackHome from './../emp-feedback/feedback-home'
import Login from './../login/login'
import MangerFeedback from './../manager-feedback/manager-feedback';
import {fetchUsers} from './../../action/loginAction';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'userDetails': null
        };
    }
    componentWillMount(){
        
    }
    pushUserDetails() {
     // alert('called');
    }
    render() {
        return (
            <Router>
              <Switch>
                  <Route exact path='/'
                  render={ (routeProps) => (<Login {...routeProps} pushUserDetails= {this.pushUserDetails}/>)} />
                  <Route path='/feedbackhome' component={FeedBackHome} />
                  <Route path='/mangerfeedback' component={MangerFeedback} />
              </Switch>
          </Router>
        );
    }
}