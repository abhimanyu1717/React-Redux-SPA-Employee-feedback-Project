
export default function login(state = {}, action) {
  switch (action.type) {
    case "FETCH_USERS": {
      state = { ...state, users: [] };
      break;
    };
    case "FETCH_USERS_FULFILLED": {
      state = {
        ...state,
        users: action.payload
      };
      break;
    }
    case "FETCH_USERS_REJECTED": {
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
