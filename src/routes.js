import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import TopNavigation from "./component/top_navigation/index";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import EventPage from "./pages/eventpage";
import MyRegistration from "./pages/my_registration/index"

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <TopNavigation>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/myregistration" exact component={MyRegistration} />
          <Route path="/events" component={EventPage} />
        </TopNavigation>
      </Switch>
    </BrowserRouter>
  );
}
