import axios from 'axios'
export const FETCHING_VILLAGERS_START = "FETCHING_VILLAGERS_START";
export const FETCHING_VILLAGERS_SUCCESS = "FETCHING_VILLAGERS_SUCCESS";
export const FETCHING_VILLAGERS_FAILURE = "FETCHING_VILLAGERS_FAILURE";

export const SAVING_VILLAGERS = "SAVING_VILLAGERS";

export const getVillagers = () => dispatch => {
         dispatch({ type: FETCHING_VILLAGERS_START });
         axios
           .get(`http://localhost:3333/smurfs`)
             .then(res => {
                 console.log(res.data)
                 res.data.forEach((data) => {
                     dispatch({
                       type: FETCHING_VILLAGERS_SUCCESS,
                       payload: data
                     });
                 })
             
           })
           .catch(err => {
               console.log(err);
                dispatch({ type: FETCHING_VILLAGERS_FAILURE });
           });
       };

export const saveVillage = (props) => dispatch => {
  console.log(props)
 
  axios
    .post("http://localhost:3333/smurfs", props)
    .then(res => {
      console.log(res);
      dispatch({ type: SAVING_VILLAGERS, payload: props });
    })
    .catch(err => console.log(err.response));
}
      