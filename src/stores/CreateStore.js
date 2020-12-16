import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistReducer, persistStore} from 'redux-persist';

import rootReducer from './../reducers';
import rootSaga from './../sagas';
import {composeWithDevTools} from 'redux-devtools-extension';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
};

const middleware = [];
const enhancers = [];

// Connect the sagas to the redux store
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

enhancers.push(composeWithDevTools(applyMiddleware(...middleware)));

// Redux persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, compose(...enhancers));
export const persistor = persistStore(store);

// Kick off the root saga
sagaMiddleware.run(rootSaga);
