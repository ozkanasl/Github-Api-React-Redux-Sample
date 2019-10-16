import { put, call, takeEvery } from "redux-saga/effects";
import axios from "axios";
import * as dataActions from "./RepoList.actions";
import REPO_LIST from "./RepoList.constants";


function* getRepoList() {
    try {
        const { data } = yield call(axios.get, "https://api.github.com/users/reactjs/repos");
        yield put(dataActions.getRepoListFinish(data));
    } catch {
        yield put(dataActions.getRepoListRejected({ fetching: false }));
    }
}

export default function* RepoListSaga() {
    yield takeEvery(REPO_LIST.GET_REPO_LIST_REQUEST, getRepoList);
}