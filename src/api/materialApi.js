import { API } from "./api";
import axios from "axios";

export const createMaterial = (dataObj) => {
  axios({
    method: "POST",
    url: API.material.createMaterial,
    data: JSON.stringify(dataObj),
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch(({ response }) => {
      console.log(response.data);
    });
};

export const deleteMaterial = (dataObj) => {
  axios({
    method: "POST",
    url: API.material.deleteMaterial,
    data: JSON.stringify(dataObj),
  })
    .then((response) => console.log(response.data))
    .catch(({ response }) => {
      console.log(response.data);
    });
};

export const updateMaterial = (dataObj) => {
  console.log(dataObj)
  axios({
    method: "POST",
    url: API.material.updateMaterial,
    data: JSON.stringify(dataObj),
  })
    .then((response) => console.log(response.data))
    .catch(({ response }) => console.log(response.data));
};
