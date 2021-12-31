import axios from "axios";

export default class AuthService{

    signin(body){
        return axios.post("/api/auth/signin", body);
    }
}