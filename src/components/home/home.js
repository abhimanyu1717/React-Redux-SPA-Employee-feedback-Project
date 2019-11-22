import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {connect} from "react-redux";

/*component */
import FeedBackHome from './../emp-feedback/feedback-home'
import Login from './../login/login'
import MangerFeedback from './../manager-feedback/manager-feedback';
import {homeAddAction} from './../../action/home-action';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'userDetails': null
        };
    }
    componentWillMount(){
        this.props.dispatch(homeAddAction());
    }
    componentDidUpdate() {
        console.log("HOME COMPONENT componentDidUpdate ==================>" , this.props.store);
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
export default connect((store)=> {
    return {
      store:store
    }
  })(Home);