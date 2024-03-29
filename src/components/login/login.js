import React from 'react';
import {connect} from "react-redux";
import {fetchUsers} from './../../action/loginAction';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            'userName': '',
            'password': '',
            'rememberFlag': false
        }
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }

    handleChange(ev) {
        this.setState({ [ev.target.name]: ev.target.value });
        console.log(this.state);
    }
    
    componentDidUpdate() {
        if(this.props.store.login && this.props.store.login.users && this.props.store.login.users.length > 0) {
            this.redirectToPages(this.props.store.login.users);
        }
    }
    login(event) {
        event.preventDefault();
         this.props.dispatch(fetchUsers(this.state));
    }
    
    redirectToPages(_userList){
        const emp = _userList[0];
        if (emp && emp.role === 'employee') {
            this.props.history.push("/feedbackhome");
        } else if (emp && emp.role === 'manager') {
            this.props.history.push("/mangerfeedback");
        } else {
            alert('User not found.');
        }
    }
    render() {
        return (
            <form className="login-container">
                <div className="form-group">
                    <label>User Name:</label>
                    <input type="text" className="form-control" name="userName" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control" name="password" onChange={this.handleChange} />
                </div>
                <div className="form-group form-check">
                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" name="rememberFlag" onChange={this.handleChange} /> Remember me</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.login}>Submit</button>
            </form>
        );

    }
}
export default connect((store)=> {
    return {
        store:store
    }
  })(Login);

