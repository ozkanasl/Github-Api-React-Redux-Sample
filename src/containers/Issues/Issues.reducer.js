import ISSUES from "./Issues.constants";

const initialState = {
    isFetching:true
};


const IssuesReducer = (state: Object = initialState, action: Object) => {

    switch (action.type) {
        case ISSUES.GET_ISSUES_REQUEST:
            return {
                ...state
            };

        case ISSUES.GET_ISSUES_FINISH:
            return {
                ...state,
                issuesList: action.issuesList,
                isFetching: false
            };
        case ISSUES.GET_ISSUES_REJECTED:
            return {
                ...state,
                isFetching: false,
                errorMessage:action.errorMessage
            };
        default:
            return state;
    }

};


export default IssuesReducer;