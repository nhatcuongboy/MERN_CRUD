import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../../components/NotFound";
import AddEdit from "./pages/AddEdit";
import List from "./pages/List";

// Equipment.propTypes = {};

const Equipment = (props) => {
  const match = useRouteMatch();
  //   console.log({ match });

  return (
    <Switch>
      <Route exact path={match.url} component={List} />

      <Route path={`${match.url}/add`} component={AddEdit} />
      <Route path={`${match.url}/edit/:equipmentId`} component={AddEdit} />

      <Route component={NotFound} />
    </Switch>
  );
};

export default Equipment;
