import axios from "axios";
import secureLs from "../common/helper";

export default class TransactionService{

    transfer(url,body){
        let config = {
            headers : {
                Authorization : secureLs.get("Authorization")
            }
        }
        return axios.post("/api/transactions/" + url, body, config);
    }
}