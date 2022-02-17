import axios from "axios";
import secureLs from "../common/helper";

export default class LoanNotificationService{

    getAllLoanNotifications(){
        let config = {
            headers : {
                Authorization : secureLs.get("Authorization")
            }
        }
        return axios.get("/api/loanNotifications/findAll", config);
    }
}