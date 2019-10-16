import PULL_REQUESTS from "./PullRequests.constants";



export const getPullRequestsRequest = (repoName) => ({
    type: PULL_REQUESTS.GET_PULL_REQUESTS_REQUEST,
    repoName
});


export const getPullRequestsFinish = (pullRequestsDetail) => ({
    type: PULL_REQUESTS.GET_PULL_REQUESTS_FINISH,
    pullRequestsDetail
});

export const getPullRequestsRejected = (errorMessage) => ({
    type: PULL_REQUESTS.GET_PULL_REQUESTS_REJECTED,
    errorMessage
});