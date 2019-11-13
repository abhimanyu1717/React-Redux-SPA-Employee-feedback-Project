import React from 'react';
import { useHistory } from "react-router-dom";
const userList = [
    {'name':'abhi', 'password':'abhi12','role':'employee'},
    {'name':'nam', 'password':'nam12','role':'manager'}
];
export default class Login extends React.Component {
     
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

    login(event) {
        event.preventDefault();
        console.log('login==', this.state);
        let emp = userList.find( (obj) => {
            return (obj.name === this.state.userName && obj.password === this.state.password);
        });
        if(emp && emp.role === 'employee') {
            this.props.history.push("/feedbackhome");
        } else if (emp && emp.role === 'manager') {
            this.props.history.push("/mangerfeedback");
            
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