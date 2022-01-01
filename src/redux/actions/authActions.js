import * as ACTIONS from "../constants/constants"


export const signinSuccess = () => {
    return {
        type : ACTIONS.SIGNIN_SUCCESS
    }
}

export const logoutSuccess = () => {
    return {
        type : ACTIONS.LOGOUT_SUCCESS
    }
}

export const tokenExpired = () => {
    return {
        type : ACTIONS.TOKEN_EXPIRED
    }
}