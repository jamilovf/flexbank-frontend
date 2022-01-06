import axios from "axios";
import secureLs from "../common/helper";

export default class TransactionService {
  transfer(url, body) {
    let config = {
      headers: {
        Authorization: secureLs.get("Authorization"),
      },
    };
    return axios.post("/api/transactions/" + url, body, config);
  }

  getAll(page) {
    let config = {
      headers: {
        Authorization: secureLs.get("Authorization"),
      },
      params: {
        page: page,
      },
    };

    return axios.get("/api/transactions/findAll", config);
  }

  getPageCount() {
    let config = {
      headers: {
        Authorization: secureLs.get("Authorization"),
      },
    };
    return axios.get("/api/transactions/countPages", config);
  }
}
