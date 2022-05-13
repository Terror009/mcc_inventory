import { API } from "./api";
import axios from "axios";

export const createUserList = (dataObj) => {
  axios({
    method: "POST",
    url: API.user_list.createUserList,
    data: JSON.stringify(dataObj),
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch(({ response }) => {
      console.log(response.data);
    });
};

export const deleteUserList = (dataObj) => {
  axios({
    method: "POST",
    url: API.user_list.deleteUserList,
    data: JSON.stringify(dataObj),
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch(({ response }) => {
      console.log(response.data);
    });
};

export const updateUserList = (dataObj) => {
  axios({
    method: "POST",
    url: API.user_list.updateUserList,
    data: JSON.stringify(dataObj),
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch(({ response }) => {
      console.log(response.data);
    });
};
