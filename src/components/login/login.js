import React from 'react';
export default class Login extends React.Component {
    render() {
        return (
            <div className="login-container">
                <div className="form-group">
                    <label>User Name:</label>
                    <input type="text" className="form-control" id="email" />
                </div>
                <div className="form-group">
                        <label>Password:</label>
                        <input type="password" className="form-control" id="pwd" />
                </div>
                <div className="form-group form-check">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" /> Remember me</label>
                </div>
             <button type="submit" className="btn btn-primary">Submit</button>
          </div>
                        );
                
                    }
}