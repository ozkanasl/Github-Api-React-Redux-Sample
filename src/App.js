import React, { Component } from "react";

import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import { Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { routerMiddleware, ConnectedRouter } from "connected-react-router";
import createSagaMiddleware from "redux-saga";


import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

import RepoList from "./containers/RepoList/RepoList.container";
import RepoDetails from "./containers/RepoDetails/RepoDetails.container";
import PullRequests from './containers/PullRequests/PullRequests.container';
import Issues from './containers/Issues/Issues.container'



import "./App.css";

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const initialState = {

};

export const store = createStore(
  rootReducer(history),
  initialState,
  compose(
    applyMiddleware(
      sagaMiddleware,
      routerMiddleware(history)
    ),
    (
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )
);

sagaMiddleware.run(rootSaga);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
              <Route exact path="/" component={RepoList} />
            <Route exact path="/:repoName" component={RepoDetails} />
            <Route exact path="/:repoName/issues" component={Issues} />
            <Route exact path="/:repoName/pulls" component={PullRequests} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;