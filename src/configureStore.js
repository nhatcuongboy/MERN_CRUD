import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import rootSaga from "./sagas/index";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
