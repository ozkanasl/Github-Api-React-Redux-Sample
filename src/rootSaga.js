import { fork } from "redux-saga/effects";



import RepoListSaga from "./containers/RepoList/RepoList.saga";
import RepoDetailsSaga from "./containers/RepoDetails/RepoDetails.saga";
import IssuesSaga from './containers/Issues/Issues.saga';
import PullRequestsSaga from './containers/PullRequests/PullRequests.saga';


export default function* rootSaga() {
    yield fork(RepoListSaga);
    yield fork(RepoDetailsSaga);
    yield fork(IssuesSaga);
    yield fork(PullRequestsSaga);
}