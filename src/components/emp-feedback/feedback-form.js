import React from 'react';

export default class FeedBackForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
              'empName':'',
              'empId':'',
              'empProject':'',
              'comment':'',
        };

       this.handleChange = this.handleChange.bind(this);
       this.submitFeedback = this.submitFeedback.bind(this);
    }
    handleChange(ev) {
       this.setState({[ev.target.name]: ev.target.value});
    }
    submitFeedback(event) {
        event.preventDefault();
        console.log('submit ==', this.state)
        this.props.saveFeedBackCallBack(this.state);
    }
    cancel() {
        alert('cancel');
    }

    render() {
        return (
            
                <form>
                    <div className="form-group">
                        <label>Employee Name:</label>
                        <input type="text" className="form-control" name="empName" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Employee Id:</label>
                        <input type="text" className="form-control" name="empId" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Project:</label>
                        <select className="form-control" name="empProject" onChange={this.handleChange}>
                            <option>Project 1</option>
                            <option>Project 2</option>
                            <option>Project 3</option>
                            <option> Project4</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Comment:</label>
                        <textarea className="form-control" name="comment" onChange={this.handleChange}>
                        </textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.cancel}>Cancel</button>
                    <button type="submit" className="btn btn-primary" onClick={this.submitFeedback}>Submit</button>
                </form>
        );

    }
}