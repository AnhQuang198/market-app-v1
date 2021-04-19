import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import "./theme.scss";
import { authRoutes, publicRoutes } from "./routes/route";
import PublicRoute from "./routes/PublicRoute";
import AuthenRoute from "./routes/AuthenRoute";
import Error404 from "./pages/Utils/Error404";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            {publicRoutes.map((route, idx) => (
              <PublicRoute
                restricted={true}
                path={route.path}
                component={route.component}
                key={idx}
                exact
              />
            ))}

            {authRoutes.map((route, idx) => (
              <AuthenRoute
                restricted={true}
                path={route.path}
                component={route.component}
                key={idx}
                exact
              />
            ))}
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;