import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import LoadingView from './components/LoadingView/index'
import { Provider } from "react-redux";
import { configureStore, persistor } from "./configureStore";
import { PersistGate } from 'redux-persist/integration/react'
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { setToken } from "./configures/axios";

const store = configureStore();

if (localStorage.jwtToken) {
  setToken(localStorage.jwtToken)
}

ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate loading={<LoadingView />} persistor={persistor}> */}
    <App />
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
