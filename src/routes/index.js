import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Login from "../pages/login/Login";
import Default from "../pages/default/Default";
import ValidityChecker from "./validityChecker";
import privateRoutes from "./privateRoutes";
import Header from "../parts/header/Header";

const Routes = () => {

    return(
        <BrowserRouter>
            <Header />
            <>
                <Switch>
                    <Route path={'/login'} exact component={Login}/>
                    <ValidityChecker component={privateRoutes} />
                    <Route path={'/notFound'} exact component={Default}/>
                    <Route path={'*'} >
                        <Redirect to={'/notFound'} />
                    </Route>
                </Switch>
            </>
        </BrowserRouter>
    )
}
export default Routes;