// default import
import React from "react";
import {Route, Switch} from "react-router-dom";
//routes import
import Dashboard from "../pages/dashboard/Dashboard";
import Tasks from "../pages/tasks/Tasks";
import UpdateTask from "../pages/updateTask/UpdateTask";
import Members from "../pages/members/Members";
import UpdateMember from "../pages/updateMember/UpdateMember";

const PrivateRoutes = () => {
    return (
        <Switch>
            <Route path={'/'} exact component={Dashboard}/>
            <Route path={'/tasks'} exact component={Tasks}/>
            <Route path={'/tasks/:name'} exact component={UpdateTask}/>
            <Route path={'/members'} exact component={Members}/>
            <Route path={'/members/:name'} exact component={UpdateMember}/>
        </Switch>
    )
}

export default PrivateRoutes;