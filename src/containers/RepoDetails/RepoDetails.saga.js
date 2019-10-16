import { put, call, takeEvery } from "redux-saga/effects";
import axios from "axios";
import * as dataActions from "./RepoDetails.actions";
import REPO_DETAILS from "./RepoDetails.constants";


function* getRepoDetails({ repoName }) {

    try {
        const { data } = yield call(axios.get, "https://api.github.com/repos/reactjs/" + repoName);
        yield put(dataActions.getRepoDetailsFinish(data));
    } catch {
        yield put(dataActions.getRepoDetailsRejected({ fetching: false }));
    }
}
export default function* RepoDetailsSaga() {
    yield takeEvery(REPO_DETAILS.GET_REPO_DETAILS_REQUEST, getRepoDetails);
}