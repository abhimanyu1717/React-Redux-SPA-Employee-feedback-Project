import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import FeedBackHome from './../emp-feedback/feedback-home'
import Login from './../login/login'
export default class Home extends React.Component {
    render() {
        return (
            <Router>
              <Switch>
                  <Route exact path='/' component={Login} />
                  <Route path='/feedbackhome' component={FeedBackHome} />
              </Switch>
          </Router>
        );
    }
}