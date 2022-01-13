import React from "react";
import PlanJourney from "./PlanJourney";
import Layout from "./Layout";
import { Switch, Route } from "react-router-dom";
import  DesktopContainer from "./DesktopContainer"
const Routes = (props) => {
    alert(JSON.stringify(props))
  return (
    <>

      <Switch>
        <Route exact path={"/"}>
          <Layout />
        </Route>
        <Route exact path={"/plan-journey"}>
          <PlanJourney />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
