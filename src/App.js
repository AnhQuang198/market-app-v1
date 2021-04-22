import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Redirect } from "react-router-dom";
import "./theme.scss";
import { authRoutes, publicRoutes } from "./routes/route";
import PublicRoute from "./routes/PublicRoute";
import AuthenRoute from "./routes/AuthenRoute";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            {publicRoutes.map((route, idx) => (
              <PublicRoute
                path={route.path}
                component={route.component}
                key={idx}
                exact
              />
            ))}
            {authRoutes.map((route, idx) => (
              <AuthenRoute
                path={route.path}
                component={route.component}
                key={idx}
                exact
              />
            ))}
            <Redirect to="/pages-404" />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;