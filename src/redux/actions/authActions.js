import * as ACTIONS from "../constants/constants"


export const signinSuccess = () => {
    return {
        type : ACTIONS.SIGNIN_SUCCESS
    }
}

export const adminSigninSuccess = () => {
    return {
        type : ACTIONS.ADMIN_SIGNIN_SUCCESS
    }
}


export const phoneNumberVerificationSuccess = () => {
    return {
        type : ACTIONS.PHONE_NUMBER_VERIFICATION_SUCCESS
    }
}

export const smsCodeVerificationSuccess = () => {
    return {
        type : ACTIONS.SMS_CODE_VERIFICATION_SUCCESS
    }
}

export const signupVerificationSuccess = () => {
    return {
        type : ACTIONS.SIGNUP_VERIFICATION_SUCCESS
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