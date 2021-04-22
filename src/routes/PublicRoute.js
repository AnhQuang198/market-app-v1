import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../Base';
import NonAuthLayout from "../layouts/NonAuthLayout";

const PublicRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            !isLogin() ?
                <NonAuthLayout>
                    <Component {...props} />
                </NonAuthLayout> : <Redirect to="/home" />
        )} />
    );
};

export default PublicRoute;