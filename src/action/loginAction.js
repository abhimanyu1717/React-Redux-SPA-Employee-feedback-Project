import { urlConfig } from './../config/url-config';
export const fetchUsers = function fetchUsers(_userDetails) {

    return function (dispatch) {
        const URL = urlConfig().login;
        dispatch({ type: 'FETCH_USERS' });
        fetch(URL + "?name=" + _userDetails.userName + "&password=" + _userDetails.password)
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
// export default fetchUsers();