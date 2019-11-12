import React from 'react'

export default class FeedBackList extends React.Component {
    render() {
        return (
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>Employee Name</th>
                        <th>Employee Id</th>
                        <th>Project</th>
                        <th>Comment</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.feedbackList.map((obj,index) => (
                       <TableRow key={index} feedBack={obj} />
                    ))}
                </tbody>
            </table>
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
            </tr>
        );
    }
}