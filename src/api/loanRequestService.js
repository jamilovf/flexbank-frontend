import axios from "axios";
import secureLs from "../common/helper";

export default class LoanRequestService{

    requestLoan(url,body){
        let config = {
            headers : {
                Authorization : secureLs.get("Authorization")
            }
        }
        return axios.post("/api/loanRequests/" + url, body, config);
    }
}