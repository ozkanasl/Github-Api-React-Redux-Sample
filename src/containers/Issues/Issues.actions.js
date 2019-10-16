import ISSUES from "./Issues.constants";



export const getIssuesRequest = (repoName) => ({
    type: ISSUES.GET_ISSUES_REQUEST,
    repoName
});


export const getIssuesFinish = (issuesList) => ({
    type: ISSUES.GET_ISSUES_FINISH,
    issuesList
});

export const getIssuesRejected = (errorMessage) => ({
    type: ISSUES.GET_ISSUES_REJECTED,
    errorMessage
});