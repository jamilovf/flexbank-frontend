import axios from "axios";
import secureLs from "../common/helper";


export default class AdminService {
  registerCustomerDetails(body) {
    let config = {
      headers: {
        Authorization: secureLs.get("Authorization"),
      },
    };
    return axios.post("/api/admin/registerCustomerDetails", body, config);
  }
}
