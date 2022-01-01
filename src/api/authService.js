import axios from "axios";

export default class AuthService{

    signin(body){
        return axios.post("/api/auth/signin", body);
    }

    signup(body){
        let config = {
            headers : {
                phone : localStorage.getItem("phone")
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
                phone : localStorage.getItem("phone")
            }
        }
        return axios.post("/api/auth/verifySmsCode", body, config);
    }
}