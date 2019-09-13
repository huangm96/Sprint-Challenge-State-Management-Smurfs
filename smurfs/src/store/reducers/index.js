import {
  FETCHING_Villagers_START,
  FETCHING_Villagers_SUCCESS
} from "../actions";
const initialState = {
  isFetching: false,
  smurfs: [
    
  ]
};
export const reducer = (state = initialState, action) => {
 
  switch (action.type) {
    case FETCHING_Villagers_START:
      console.log(state);
      return {
        ...state,
        isFetching: true
      };
    case FETCHING_Villagers_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
          isFetching: false,
        smurfs:[...state.smurfs, action.payload]
      };
    default:
      return state;
  }
};
