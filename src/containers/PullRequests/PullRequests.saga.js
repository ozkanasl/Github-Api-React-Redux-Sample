import { put, call, takeEvery } from "redux-saga/effects";
import axios from "axios";
import * as dataActions from "./PullRequests.actions";
import PULL_REQUESTS from "./PullRequests.constants";


function* getPullRequests({repoName}) {

    try {
        const { data } = yield call(axios.get, "https://api.github.com/repos/reactjs/" + repoName + "/pulls");
        yield put(dataActions.getPullRequestsFinish(data));
    } catch {
        yield put(dataActions.getPullRequestsRejected({ fetching: false }));
    }


}

export default function* PullRequestsSaga() {
    yield takeEvery(PULL_REQUESTS.GET_PULL_REQUESTS_REQUEST, getPullRequests);
}