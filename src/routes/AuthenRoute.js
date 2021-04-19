import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../Base';
import AuthenLayout from '../layouts/AuthLayout';


const AuthenRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            isLogin() ?
                <AuthenLayout>
                    <Component {...props} />
                </AuthenLayout>
                : <Redirect to="/login" />
        )} />
    );
};

export default AuthenRoute;