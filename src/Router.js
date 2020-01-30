import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";
import Results from "./Results";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/results/:Id" render={(props) => <Results {...props} />}/>
            <Route exact path="/" component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;