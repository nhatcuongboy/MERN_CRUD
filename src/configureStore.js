import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from "./reducers/index";
import rootSaga from "./sagas/index";
import { composeWithDevTools } from "redux-devtools-extension";

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware();

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export const persistor = persistStore(configureStore());

// export { configureStore, persistor };
