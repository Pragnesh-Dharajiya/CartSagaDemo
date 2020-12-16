import {takeLatest, all} from 'redux-saga/effects';
import {fetchBannerSaga} from './bannerSaga';
import * as CONST from '../utils/Constants';

export default function* root() {
  yield all([takeLatest(CONST.FETCH_BANNER, fetchBannerSaga)]);
}
