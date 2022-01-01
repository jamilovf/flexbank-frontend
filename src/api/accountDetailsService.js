import axios from "axios";
import secureLs from "../common/helper";

export default class AccountDetailsService{

    getAccountDetails(){
        let config = {
            headers : {
                Authorization : secureLs.get("Authorization")
            }
        }
        return axios.get("/api/customers/getDetails", config);
    }
}