import api from '../api';

const FETCH_DATA_START_ACTION = 'FETCH_DATA_START_ACTION';
const FETCH_DATA_SUCCESS_ACTION = 'FETCH_DATA_SUCCESS_ACTION';
const FETCH_DATA_ERROR_ACTION = 'FETCH_DATA_ERROR_ACTION';

const INITIAL_STATE = {
  asyncLoading: false,
  asyncError: null,
  asyncData: null
}

// Reducers
export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case FETCH_DATA_START_ACTION:
      return { ...state, asyncLoading: true, asyncError: null }
    case FETCH_DATA_SUCCESS_ACTION:
      return { ...state, asyncLoading: false, asyncData: action.data }
    case FETCH_DATA_ERROR_ACTION:
      return { ...state, asyncLoading: false, asyncError: action.err }
    default:
      return state
  }
}


// Action creators
function fetchDataStart(){
  return{
    type: 'FETCH_DATA_START_ACTION'
  }
}

function fetchDataSuccess(data){
  return {
    type: 'FETCH_DATA_SUCCESS_ACTION',
    data
  }
}

function fetchDataError(err){
  return {
    type: 'FETCH_DATA_ERROR_ACTION',
    err
  }
}

export function fetchData(path) {
  return function (dispatch) {

    // testAsyncStart will asyncLoading: true
    dispatch(fetchDataStart());

    api.fetchData(path)
      .then(data => {
        return dispatch(fetchDataSuccess(data.data))
      })
      .catch(error => dispatch(fetchDataError(error)));
  };
}
