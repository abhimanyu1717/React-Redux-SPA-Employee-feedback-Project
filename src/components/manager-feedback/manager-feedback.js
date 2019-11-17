import React from 'react';
var employeesfeedback = [
    { "id": 1, "empName": "abhi", "empId": "11", "empProject": "project1", "comment": "dff", "managerComment": "manager feed back" },
    { "id": 2, "empName": "abhi2", "empId": "12", "empProject": "project2", "comment": "dfffaaf", "managerComment": "manager feed back2" }
];
export default class MangerFeedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'feedBackList': employeesfeedback
        };
    }
    componentDidMount() {
        this.getEmployeeFeedBackList();
    }
    getEmployeeFeedBackList() {
        const loginApiUrl = 'http://localhost:4000/employeesfeedback';
        fetch(loginApiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({ 'feedBackList': result });
                },
                (error) => { }
            )
    }
    render() {
        return (
            <div className="container feedback-container container-border">
                <div className="row container-border">
                    <div className="col-md-5"><h4>Welcome John</h4></div>
                    <div className="col-md-7"><h4>Employee Screen</h4></div>
                </div>
                <div className="row">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th>Employee Name</th>
                                <th>Employee Id</th>
                                <th>Project</th>
                                <th>Employee Comment</th>
                                <th>Manager Comment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.feedBackList.map((obj, index) => (
                                <TableRow key={index} feedBack={obj} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.feedBack.empName}</td>
                <td>{this.props.feedBack.empId}</td>
                <td>{this.props.feedBack.empProject}</td>
                <td>{this.props.feedBack.comment}</td>
                <td>{this.props.feedBack.managerComment}</td>
            </tr>
        );
    }
}
