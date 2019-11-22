export const fetchFeedBackList= function () {

    return function (dispatch) {
        const URL = 'http://my-json-server.typicode.com/abhimanyu1717/employeeFeedBackDB/employeesfeedback';

        dispatch({ type: 'FETCH_FEEDBACK'});
        fetch(URL)
            .then(response => {
                return response.json();
            })
            .then((data) => {
                dispatch({ type: 'FETCH_FEEDBACK_FULFILLED', payload: data });
            })
            .catch((error) => {
                dispatch({ type: 'FETCH_FEEDBACK_REJECTED', payload: error })
            });
    }
}
