import { API_MOCKER_SUCCESS } from "./actionTypes"


export const saveUser = (payload) => {
     return {
      type: API_MOCKER_SUCCESS,
        user:payload 
     }
}