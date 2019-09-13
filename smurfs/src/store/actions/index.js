import axios from 'axios'
export const FETCHING_Villagers_START = "FETCHING_Villagers_START";
export const FETCHING_Villagers_SUCCESS = "FETCHING_Villagers_SUCCESS";
export const FETCHING_Villagers_FAILURE = "FETCHING_Villagers_FAILURE";

export const getVillagers = () => dispatch => {
         dispatch({ type: FETCHING_Villagers_START });
         axios
           .get(`http://localhost:3333/smurfs`)
             .then(res => {
                 console.log(res.data)
                 res.data.forEach((data) => {
                     dispatch({ type: FETCHING_Villagers_SUCCESS, payload:data });
                 })
             
           })
           .catch(err => {
             console.log(err);
           });
       };
