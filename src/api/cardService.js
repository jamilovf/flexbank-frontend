import axios from "axios";
import secureLs from "../common/helper";

export default class CardService{

    getAllCards(){
        let config = {
            headers : {
                Authorization : secureLs.get("Authorization")
            }
        }
        return axios.get("/api/cards/findAll", config);
    }

    blockCard(body){
        let config = {
            headers : {
                Authorization : secureLs.get("Authorization")
            }
        }
        return axios.put("/api/cards/block", body, config);
    }

    unblockCard(body){
        let config = {
            headers : {
                Authorization : secureLs.get("Authorization")
            }
        }
        return axios.put("/api/cards/unblock", body, config);
    }
}