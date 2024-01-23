import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";

import rootReducers from '../store/reducers';
// import rootSaga from './rootSaga';

// Create Saga Middleware
const sagaMiddleware = createSagaMiddleware();
// Mount it on the store
const store = createStore(rootReducers, applyMiddleware(sagaMiddleware))

// Then run the saga
// sagaMiddleware.run(rootSaga)

// Render the application
export default store