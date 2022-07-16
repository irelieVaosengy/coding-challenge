import axios from 'axios'
import AppActionTypes from "../actions/appActionTypes";

export const getTechnologyList = async (dispatch) =>{
    try {
        const response = await axios.get(`tlmninja/technologies`);
        dispatch({
            type: AppActionTypes.GET_TECHNOLOGIES_SUCCESS,
            payload: response?.data,
        })
    } catch (error) {
        dispatch({
            type: AppActionTypes.GET_TECHNOLOGIES_FAILURE,
            payload: getErrorPayload(),
        })
    }

}

export const getNinjaData = async (dispatch, searchKeyWords) =>{
    try {
        const response =  await axios.get(`tlmninja/ninjify?x=${searchKeyWords}`);
        let toReturn

        if(response.status === 200 && response.data) {
            dispatch({
                type: AppActionTypes.GET_AWESOME_NINJA_SUCCESS,
                payload: response.data,
            })

            toReturn = response.data
        } else {
            toReturn = response.statusText
        }

        return toReturn
    } catch (error) {
        const errorMessage = getErrorPayload()
        dispatch({
            type: AppActionTypes.GET_AWESOME_NINJA_FAILURE,
            payload: getErrorPayload(),
        })

        return errorMessage
    }
}

function getErrorPayload(error){
    return  error.message && error.response.data.message
        ? error.response.data.message
        : error.message
}
