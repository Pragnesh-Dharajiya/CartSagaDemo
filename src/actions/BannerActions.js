import * as CONST from '../utils/Constants';

export function fetchBanners() {
  return {
    type: CONST.FETCH_BANNER,
  };
}

export function fetchBannersSuccess(bannerData) {
  return {
    type: CONST.FETCH_BANNER_SUCCESS,
    payload: {
      bannerData,
    },
  };
}

export function fetchBannersFailure() {
  return {
    type: CONST.FETCH_BANNER_FAILURE,
  };
}
