import { urlConfig } from './../config/url-config';
export const fetchFeedBackList = function () {
    return function (dispatch) {
        const URL = urlConfig().empFeedBack;
        dispatch({ type: 'FETCH_FEEDBACK' });
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
