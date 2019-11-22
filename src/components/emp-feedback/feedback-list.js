import React from 'react'
import { connect } from "react-redux";
import { fetchFeedBackList } from './../../action/feedbackAction';

class FeedBackList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchFeedBackList());
        // this.getEmployeeFeedBackList();
    }

    componentDidUpdate() {
        if (this.props.feedBackList) {
            console.log("FeedBackList componentDidUpdate =====", this.props.feedBackList);
        }
    }
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
                    {this.props.feedbackList.map((obj, index) => (
                        <TableRow key={index} feedBack={obj} />
                    ))}
                </tbody>
            </table>
        );
    }
}
function mapStateToProps(state) {
    if (state.feedBack && state.feedBack.feedBackList) {
        return { feedbackList: state.feedBack.feedBackList }
    }
}
export default connect(mapStateToProps)(FeedBackList);

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