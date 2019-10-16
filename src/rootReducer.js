import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import RepoListReducer from "./containers/RepoList/RepoList.reducer";
import RepoDetailsReducer from "./containers/RepoDetails/RepoDetails.reducer";
import IssuesReducer from './containers/Issues/Issues.reducer';
import PullRequestsReducer from './containers/PullRequests/PullRequests.reducer';


const rootReducer = (history) =>
    combineReducers({
        repoList: RepoListReducer,
        repoDetails: RepoDetailsReducer,
        issues: IssuesReducer,
        pullRequests: PullRequestsReducer,
        router: connectRouter(history)
    });



export default rootReducer;