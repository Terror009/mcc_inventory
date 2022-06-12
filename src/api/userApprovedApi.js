import { API } from "./api";
import axios from "axios";

export const approvedUser = (dataObj) => {
  console.log(dataObj);
  axios({
    method: "POST",
    url: API.userApproved.createUserApproved,
    data: JSON.stringify(dataObj),
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch(({ response }) => {
      console.log(response);
    });
};

export const emailedUser = (dataObj) => {
  console.log(dataObj)
  axios({
    method: "POST",
    url: API.userApproved.emailedUser,
    data: JSON.stringify(dataObj),
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch(({ response }) => {
      console.log(response);
    });
};
