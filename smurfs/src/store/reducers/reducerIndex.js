import { FETCH_SMURFS,
     FETCH_SMURFS_ERROR,
      FETCH_SMURFS_SUCCESS} 
      from '../actions/actionIndex'

const initialState = {
    smurfs: [],
    loadingSmurfs: true
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
        default:
            return state;
    }
}