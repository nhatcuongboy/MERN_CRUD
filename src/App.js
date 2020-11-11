import React, { Suspense } from "react";
// import { useDispatch } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import PrivateRoute from './components/RestrictRoute/PrivateRoute'

// const Home = React.lazy(() => import("./features/Home"));
const Equipment = React.lazy(() => import("./features/Equipment"));
const Login = React.lazy(() => import("./features/Auth/pages/Login"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Redirect exact from="/" to="/equipment" />
            <Route path="/equipment" component={Equipment} />
            {/* <PrivateRoute path="/equipment" component={Equipment} exact /> */}
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
