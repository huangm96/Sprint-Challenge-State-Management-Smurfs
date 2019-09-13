import {
  FETCHING_Villagers_START,
  FETCHING_Villagers_SUCCESS,
  FETCHING_Villagers_FAILURE
} from "../actions";
const initialState = {
  isFetching: false,
  smurfs: [],
  error: ""
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_Villagers_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCHING_Villagers_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        isFetching: false,
        smurfs: [...state.smurfs, action.payload]
      };
    case FETCHING_Villagers_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: "ERRORS!!!!!!!"
      };
    default:
      return state;
  }
};
