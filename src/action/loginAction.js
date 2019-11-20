
function fetchUsers() {

    return function (dispatch) {

        const URL = "http://my-json-server.typicode.com/abhimanyu1717/employeeFeedBackDB/login";

        dispatch({ type: 'FETCH_USERS' });
        fetch(URL)
            .then(response => {
                return response.json();
            })
            .then((data) => {
                dispatch({ type: 'FETCH_USERS_FULFILLED', payload: data });
            })
            .catch((error) => {
                dispatch({ type: 'FETCH_USERS_REJECTED', payload: error })
            });
    }
}
export default fetchUsers();