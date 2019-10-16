import PULL_REQUESTS from "./PullRequests.constants";

const initialState = {
    isFetching:true
};


const PullRequestsReducer = (state: Object = initialState, action: Object) => {

    switch (action.type) {
        case PULL_REQUESTS.GET_PULL_REQUESTS_REQUEST:
            return {
                ...state
            };

        case PULL_REQUESTS.GET_PULL_REQUESTS_FINISH:
            return {
                ...state,
                pullRequestsDetail: action.pullRequestsDetail,
                isFetching: false
            };
        case PULL_REQUESTS.GET_PULL_REQUESTS_REJECTED:
            return {
                ...state,
                isFetching: false,
                errorMessage:action.errorMessage
            };
        default:
            return state;
    }

};


export default PullRequestsReducer;