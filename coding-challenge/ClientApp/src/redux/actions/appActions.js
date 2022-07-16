import AppActionTypes from "./appActionTypes";

export const getTechnologies =  async () =>  {
    return {
        type : AppActionTypes.GET_TECHNOLOGIES
    };
}

export const getTechnologiesSuccess = (technologies) => ({
    type : AppActionTypes.GET_TECHNOLOGIES_SUCCESS,
    payload: technologies
});

export const getTechnologiesFailure = (error) => ({
    type : AppActionTypes.GET_TECHNOLOGIES_FAILURE,
    payload: error
});

export const getAwesomeNinja = async (searchBuzWord) => ({
    type : AppActionTypes.GET_AWESOME_NINJA,
    payload: searchBuzWord
});

export const getAwesomeNinjaSuccess = (awesomeNinja) => ({
    type : AppActionTypes.GET_AWESOME_NINJA,
    payload: awesomeNinja
});

export const getAwesomeNinjaFailure = (error) => ({
    type : AppActionTypes.GET_AWESOME_NINJA,
    payload: error
});
