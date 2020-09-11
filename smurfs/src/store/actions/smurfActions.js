import axios from 'axios'

// ACTION TYPES
export const FETCH_SMURFS = 'FETCH_SMURFS'
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'
export const FETCH_SMURFS_ERROR = 'FETCH_SMURFS_ERROR'


// ACTION CREATORS

export const fetchSmurfs = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_SMURFS});
        axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res)
            dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data})
        })
        .catch(error => {
            console.error(error)
            dispatch({type: FETCH_SMURFS_ERROR, payload: []})
        })
    }
}