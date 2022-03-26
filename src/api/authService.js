import axios from "axios";
import secureLs from "../common/helper";

export default class AuthService{

    signin(body){
        return axios.post("/api/auth/signin", body);
    }

    signup(body){
        let config = {
            headers : {
                phone : secureLs.get("phone")
            }
        }
        return axios.post("/api/auth/signup", body, config);
    }

    verifyPhoneNumber(body){
        return axios.post("/api/auth/verifyPhoneNumber", body);
    }

    verifySmsCode(body){
        let config = {
            headers : {
                phone : secureLs.get("phone")
            }
        }
        return axios.post("/api/auth/verifySmsCode", body, config);
    }

    verifyPasswordResetPhoneNumber(body){
        return axios.post("/api/auth/verifyPhoneNumberForPasswordReset", body);
    }

    verifyPasswordResetSmsCode(body){
        let config = {
            headers : {
                phone : secureLs.get("phone")
            }
        }
        return axios.post("/api/auth/verifySmsCodeForPasswordReset", body, config);
    }

    passwordReset(body){
        let config = {
            headers : {
                phone : secureLs.get("phone")
            }
        }
        return axios.post("/api/auth/resetPassword", body, config);
    }
}