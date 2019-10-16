import REPO_DETAILS from "./RepoDetails.constants";



export const getRepoDetailsRequest = (repoName) => ({
    type: REPO_DETAILS.GET_REPO_DETAILS_REQUEST,
    repoName
});


export const getRepoDetailsFinish = (repoDetail) => ({
    type: REPO_DETAILS.GET_REPO_DETAILS_FINISH,
    repoDetail
});

export const getRepoDetailsRejected = (errorMessage) => ({
    type: REPO_DETAILS.GET_REPO_DETAILS_REJECTED,
    errorMessage
});