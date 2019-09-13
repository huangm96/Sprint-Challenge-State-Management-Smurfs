import {
  FETCHING_VILLAGERS_START,
  FETCHING_VILLAGERS_SUCCESS,
  FETCHING_VILLAGERS_FAILURE,
  SAVING_VILLAGERS
} from "../actions";
const initialState = {
  isFetching: false,
  smurfs: [],
  error: ""
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_VILLAGERS_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCHING_VILLAGERS_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        isFetching: false,
        smurfs: [...state.smurfs, action.payload]
      };
    case FETCHING_VILLAGERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: "ERRORS!!!!!!!"
      };
    case SAVING_VILLAGERS:
      console.log(action.payload);
      return {
        ...state,
        smurfs: [
          ...state.smurfs,
          {
            name: action.payload.name,
            age: parseInt(action.payload.age),
            height: action.payload.height,
            id: action.payload.id
          }
        ]
      };
    
    default:
      return state;
  }
};
