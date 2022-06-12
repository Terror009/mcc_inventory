import { API } from "./api";
import axios from "axios";

export const uploadProfilePic = (dataObj) => {
  console.log(dataObj);
  axios({
    method: "POST",
    url: API.profilePic.createProfilePic,
    data: JSON.stringify(dataObj),
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch(({ response }) => {
      console.log(response);
    });
};
