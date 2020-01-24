import axios from 'axios';

export const FETCHING_DATA_START = 'FETCHING_DATA_START';
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS';
export const FETCHING_DATA_FAILURE = 'FETCHING_DATA_FAILURE';

export const fetchData = () => dispatch => {
    dispatch({ type: FETCHING_DATA_START });
    axios
        .get('https://official-joke-api.appspot.com/random_joke')
        .then(res => {
            dispatch({ type: FETCHING_DATA_SUCCESS, payload: res.data });
        })
        .catch(error => {
            dispatch({ type: FETCHING_DATA_FAILURE, payload: error.response })
        });
};

//EXPLANATION FROM EXERCISE TOGETHER
// const thunk = action => next => store => {
//   if (typeof action === 'function') {
//     action(store.dispatch);
//   } else if (typeof action === 'object') {
//     next(action);
//   }
// };
