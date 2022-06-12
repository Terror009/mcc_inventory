import axios from "axios";
import { API } from "./api";

export const createConstruction = (dataObj) => {
  console.log(dataObj);
  axios({
    method: "POST",
    url: API.construction_site.createConstruction,
    data: JSON.stringify(dataObj),
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch(({ response }) => {
      console.log(response.data);
    });
};

export const deleteConstruction = (dataObj) => {
  axios({
    method: "POST",
    url: API.construction_site.deleteConstruction,
    data: JSON.stringify(dataObj),
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch(({ response }) => {
      console.log(response.data);
    });
};

export const updateConstruction = (dataObj) => {
  axios({
    method: "POST",
    url: API.construction_site.updateConstruction,
    data: JSON.stringify(dataObj),
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch(({ response }) => {
      console.log(response.data);
    });
};
