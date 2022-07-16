import AppActionTypes from "../actions/appActionTypes";

const initialState = {
    technologies: [],
    awesomeNinja: {}
}
export default (state = initialState , action) => {
    switch (action.type) {
        case AppActionTypes.GET_TECHNOLOGIES_SUCCESS:
            return {
                ...state,
                technologies: action.payload
            };
        case AppActionTypes.GET_AWESOME_NINJA_SUCCESS:
            return {
                ...state,
                awesomeNinja: action.payload
            };
        default:
            return state;
    }
};
