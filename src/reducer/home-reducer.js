
export default function homeComp(state ={}, action) {
 switch(action.type) {
     case 'ADD_HOME_COMP': {
       state ={...state, homeAdd:action.payload}
     };
 }
 return state;
}