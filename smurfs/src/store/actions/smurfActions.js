import axios from 'axios'

// ACTION TYPES
export const FETCH_SMURFS = 'FETCH_SMURFS'
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'
export const FETCH_SMURFS_ERROR = 'FETCH_SMURFS_ERROR'

export const POST_SMURF = 'POST_SMURF'
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS'
export const POST_SMURF_ERROR = 'POST_SMURF_ERROR'

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

export const postSmurf = (newSmurf) => {
    return (dispatch) => {
        dispatch({type: POST_SMURF});
        axios.post('http://localhost:3333/smurfs', newSmurf)
        .then(res => {
            console.log(res)
            dispatch({type: POST_SMURF_SUCCESS, payload: []})
        })
        .catch(error => {
            console.error(error)
            dispatch({type: FETCH_SMURFS_ERROR, payload: []})
        })
    }
}

// ADD in initial form value reset