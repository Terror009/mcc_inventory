import { API } from "./api";
import axios from "axios";

export const createUserListHistory = (dataObj) => {
  axios({
    method: "POST",
    url: API.user_list_history.createUserListHistory,
    data: JSON.stringify(dataObj),
  })
    .then((response) => {
      console.log(response);
    })
    .catch(({ response }) => {
      console.log(response);
    });
};
