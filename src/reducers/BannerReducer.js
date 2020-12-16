import * as CONST from '../utils/Constants';

const initialState = {
  bannerData: [],
  isFetching: false,
};

// This reducer stores the status of email verification.
export default function StartUpReducer(state = initialState, action) {
  switch (action.type) {
    case CONST.FETCH_BANNER:
      return {
        ...state,
        bannerData: [],
        isFetching: true,
      };
    case CONST.FETCH_BANNER_SUCCESS:
      return {
        ...state,
        bannerData: action.payload.bannerData,
        isFetching: false,
      };
    case CONST.FETCH_BANNER_FAILURE:
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
}
