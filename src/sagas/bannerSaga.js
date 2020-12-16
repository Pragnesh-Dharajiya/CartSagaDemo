import {put, call, select} from 'redux-saga/effects';
import {
  fetchBannersFailure,
  fetchBannersSuccess,
} from '../actions/BannerActions';
import {secureGet} from '../utils/SendJSON';

export function* fetchBannerSaga() {
  try {
    const bannerData = yield call(secureGet, 'foodapp/api.json');
    if (bannerData) {
      yield put(fetchBannersSuccess(bannerData));
    } else {
      yield put(fetchBannersFailure());
    }
  } catch (error) {
    console.warn('error', error);
    yield put(fetchBannersFailure());
  }
}
