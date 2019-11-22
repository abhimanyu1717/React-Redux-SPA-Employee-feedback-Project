
export default function feedBack(state = {}, action) {
    switch (action.type) {
      case "FETCH_FEEDBACK": {
        state = { ...state, feedBackList: [] };
        break;
      };
      case "FETCH_FEEDBACK_FULFILLED": {
        state = {
          ...state,
          feedBackList: action.payload
        };
        break;
      }
      case "FETCH_FEEDBACK_REJECTED": {
        state = {
          ...state,
          fetching: false,
          error: action.payload
        };
        break;
      }
  
    }
    return state;
  }
  