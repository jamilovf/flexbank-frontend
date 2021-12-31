import axios from "axios";

export default class AccountDetailsService{

    getAccountDetails(){
        let config = {
            headers : {
                Authorization : localStorage.getItem("Authorization")
            }
        }
        return axios.get("/api/customers/getDetails", config);
    }
}