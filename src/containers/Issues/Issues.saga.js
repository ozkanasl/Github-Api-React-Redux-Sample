import { put, call, takeEvery } from "redux-saga/effects";
import axios from "axios";
import * as dataActions from "./Issues.actions";
import ISSUES from "./Issues.constants";


function* getIssues({repoName}) {

    try {
        const { data } = yield call(axios.get, "https://api.github.com/repos/reactjs/" + repoName + '/issues');

        yield put(dataActions.getIssuesFinish(data));
    } catch {
        yield put(dataActions.getIssuesRejected({ fetching: false }));
    }


}

export default function* IssuesSaga() {
    yield takeEvery(ISSUES.GET_ISSUES_REQUEST, getIssues);
}