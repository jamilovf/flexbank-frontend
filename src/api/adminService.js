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

  getAllLoanRequestNotifications() {
    let config = {
      headers: {
        Authorization: secureLs.get("Authorization"),
      },
    };
    return axios.get("/api/admin/getAllLoanRequestNotifications", config);
  }

  approveLoanRequest(body) {
    let config = {
      headers: {
        Authorization: secureLs.get("Authorization"),
      }
    };
    return axios.put("/api/admin/approveLoanRequest/", body, config);
  }

  declineLoanRequest(body) {
    let config = {
      headers: {
        Authorization: secureLs.get("Authorization"),
      }
    };
    return axios.put("/api/admin/declineLoanRequest/", body, config);
  }
}
