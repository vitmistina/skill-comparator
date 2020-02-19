import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";
import Results from "./Results";
import LiveComparator from "./LiveComparator";
import HomePage from "./HomePage";
import QuestionsMenu from "./QuestionsMenu";
import MainScreenLobby from "./MainScreenLobby";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/results/:Id" render={props => <Results {...props} />} />
      <Route
        path="/lobby/:Id"
        render={props => <MainScreenLobby {...props} />}
      />
      <Route path="/live/:Id" render={props => <LiveComparator {...props} />} />
      <Route path="/questions/:Id" render={props => <App {...props} />} />
      <Route
        path={["/new/:Id", "/new/"]}
        render={props => <QuestionsMenu {...props} />}
      />
      <Route exact path="/" component={HomePage} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
