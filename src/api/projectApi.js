import { API } from "./api";
import axios from "axios";

export const createProject = (dataObj) => {
  console.log(dataObj);
  axios({
    method: "POST",
    url: API.project.createProject,
    data: JSON.stringify(dataObj),
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch(({ response }) => {
      console.log(response.data);
    });
};

export const deleteProject = (dataObj) => {
  axios({
    method: "POST",
    url: API.project.deleteProject,
    data: JSON.stringify(dataObj),
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch(({ response }) => {
      console.log(response.data);
    });
};

export const updateProject = (dataObj) => {
  axios({
    method: "POST",
    url: API.project.updateProject,
    data: JSON.stringify(dataObj),
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch(({ response }) => {
      console.log(response.data);
    });
};
