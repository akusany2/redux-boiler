import { Map } from 'immutable';

import {
  FETCH_DATA_START_ACTION,
  FETCH_DATA_SUCCESS_ACTION,
  FETCH_DATA_ERROR_ACTION
} from 'actions/blog';

const initialState = Map({
  asyncLoading: false,
  asyncError: null,
  asyncData: null,
});

const actionsMap = {
  [FETCH_DATA_START_ACTION]: (state) => {
    return state.merge({
      asyncLoading: true,
      asyncError: null
    })
  },
  [FETCH_DATA_SUCCESS_ACTION]: (state, action) => {
    return state.merge({
      asyncData: action.data,
      asyncLoading: false
    })
  },
  [FETCH_DATA_ERROR_ACTION]: (state, action) =>{
    return state.merge({
      asyncError: action.err,
      asyncLoading: false
    })
  }
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
