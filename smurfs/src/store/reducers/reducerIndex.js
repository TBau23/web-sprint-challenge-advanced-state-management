import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'


import { FETCH_SMURFS,
     FETCH_SMURFS_ERROR,
      FETCH_SMURFS_SUCCESS,
    POST_SMURF,
POST_SMURF_ERROR,
POST_SMURF_SUCCESS} 
      from '../actions/actionIndex'

const initialState = {
    smurfs: [],
    loadingSmurfs: true,
    addingSmurf: false,
    formValues: {
        name: '',
        age: '',
        height: ''
    }
    
}

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case FETCH_SMURFS:
            return {
                ...state,
                loadingSmurfs: true
            }
        case FETCH_SMURFS_ERROR:
            return {
                ...state,
                loadingSmurfs: false
            }
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                loadingSmurfs: false,
                smurfs: action.payload
            }
        case POST_SMURF:

        default:
            return state;
    }
}

