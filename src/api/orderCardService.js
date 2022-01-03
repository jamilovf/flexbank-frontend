import axios from "axios";
import secureLs from "../common/helper";

export default class OrderCardService{

    orderCard(body){
        let config = {
            headers : {
                Authorization : secureLs.get("Authorization")
            }
        }
        return axios.post("/api/cardOrders/order", body, config);
    }
}