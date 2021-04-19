import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../Base';
import NonAuthLayout from "../layouts/NonAuthLayout";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            !isLogin() && restricted ?
                <NonAuthLayout>
                    <Component {...props} />
                </NonAuthLayout> : <Redirect to="/" />
        )} />
    );
};

export default PublicRoute;