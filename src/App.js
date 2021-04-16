import React, { Component } from 'react';
import { Switch, BrowserRouter as Router } from "react-router-dom";
import "./theme.scss";
import {authRoutes, publicRoutes} from "./routes/route";
import AppRoute from "./routes/index";
import NonAuthLayout from "./layouts/NonAuthLayout";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            {publicRoutes.map((route, idx) => (
              <AppRoute
                path={route.path}
                layout={NonAuthLayout}
                component={route.component}
                key={idx}
                isAuthProtected={false}
              />
            ))}

            {authRoutes.map((route, idx) => (
              <AppRoute
                path={route.path}
                layout={NonAuthLayout}
                component={route.component}
                key={idx}
                isAuthProtected={true}
              />
            ))}
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;