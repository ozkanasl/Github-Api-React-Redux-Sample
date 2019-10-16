import REPO_LIST from "./RepoList.constants";



export const getRepoListRequest = () => ({
    type: REPO_LIST.GET_REPO_LIST_REQUEST
});


export const getRepoListFinish = (data) => ({
    type: REPO_LIST.GET_REPO_LIST_FINISH,
    data
});

export const getRepoListRejected = (errorMessage) => ({
    type: REPO_LIST.GET_REPO_LIST_REJECTED,
    errorMessage
});