import REPO_DETAILS from "./RepoDetails.constants";

const initialState = {
    isFetching:true
};


const RepoDetailsReducer = (state: Object = initialState, action: Object) => {

    switch (action.type) {
        case REPO_DETAILS.GET_REPO_DETAILS_REQUEST:
            return {
                ...state
            };

        case REPO_DETAILS.GET_REPO_DETAILS_FINISH:
            return {
                ...state,
                repoDetail: action.repoDetail,
                isFetching: false
            };
        case REPO_DETAILS.GET_REPO_DETAILS_REJECTED:
            return {
                ...state,
                isFetching: false,
                errorMessage:action.errorMessage
            };
        default:
            return state;
    }

};


export default RepoDetailsReducer;