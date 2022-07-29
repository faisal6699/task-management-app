import React from "react";
import { Route, Redirect } from "react-router-dom";
import * as Auth from "../helpers/auths";

const ValidityChecker = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            Auth.validAdmin() ? (
                <Component {...props} />
            ) : (
                <Redirect to='/login' />
            )
        }
    />
);

export default ValidityChecker;