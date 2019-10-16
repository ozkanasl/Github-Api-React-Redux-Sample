import REPO_LIST from "./RepoList.constants";

const initialState = {
    isFetching:true
};

const RepoListReducer = (state: Object = initialState, action: Object) => {

    switch (action.type) {
        case REPO_LIST.GET_REPO_LIST_REQUEST:
            return {
                ...state
            };

        case REPO_LIST.GET_REPO_LIST_FINISH:
            return {
                ...state,
                data: action.data,
                isFetching: false
            };
        case REPO_LIST.GET_REPO_LIST_REJECTED:
            return {
                ...state,
                isFetching: false,
                errorMessage:action.errorMessage
            };
        default:
            return state;
    }

};


export default RepoListReducer;