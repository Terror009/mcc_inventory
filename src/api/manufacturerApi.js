import { API } from "./api";
import axios from "axios";

export const addmanufacturer = (dataObj) => {
  axios({
    method: "POST",
    url: API.manufacturer.createManufacturer,
    data: JSON.stringify(dataObj),
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch(({ response }) => {
      console.log(response.data.message);
    });
};

export const deletemanufacturer = (dataObj) => {
  axios({
    method: "POST",
    url: API.manufacturer.deleteManufacturer,
    data: JSON.stringify(dataObj),
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch(({ response }) => {
      console.log(response.data);
    });
};

export const updatemanufacturer = (dataObj) => {
  axios({
    method: "POST",
    url: API.manufacturer.updateManufacturer,
    data: JSON.stringify(dataObj),
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch(({ response }) => {
      console.log(response.data.message);
    });
};
