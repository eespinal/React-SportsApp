// import { SEARCH, SHOW_RESULTS } from '../Actions';
import { SEARCH } from '../Actions';

const initialState = {
  query:''
}

export default(state = initialState, action ) => {
  switch (action.type) {
    case SEARCH:
      return {...state, query: action.query};
    // case SHOW_RESULTS:
    //   return {...state, results: action.results};
    default:
      return state;
  }
}
