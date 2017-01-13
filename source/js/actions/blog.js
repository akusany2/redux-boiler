import api from 'api';

export const FETCH_DATA_START_ACTION = 'FETCH_DATA_START_ACTION';
export const FETCH_DATA_SUCCESS_ACTION = 'FETCH_DATA_SUCCESS_ACTION';
export const FETCH_DATA_ERROR_ACTION = 'FETCH_DATA_ERROR_ACTION';

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
        console.log(data);
        return dispatch(fetchDataSuccess(data))
      })
      .catch(error => dispatch(fetchDataError(error)));
  };
}

// Update
