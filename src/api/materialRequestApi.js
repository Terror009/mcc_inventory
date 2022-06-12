import axios from "axios";
import { API } from "./api";

export const deleteRequest = (dataObj) => {
  axios({
    method: "POST",
    url: API.materialRequest.deleteMaterial,
    data: JSON.stringify(dataObj),
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch(({ response }) => {
      console.log(response);
    });
};

export const rejectRequest = (dataObj) => {
  axios({
    method: "POST",
    url: API.acceptRequest.createRequest,
    data: JSON.stringify(dataObj),
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch(({ response }) => console.log(response));
};

export const acceptRequest = (dataObj) => {
  console.log(dataObj);
  axios({
    method: "POST",
    url: API.acceptRequest.createRequest,
    data: JSON.stringify(dataObj),
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch(({ response }) => console.log(response));
};
