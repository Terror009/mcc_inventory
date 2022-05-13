import { API } from "./api";
import axios from "axios";

export const signup = (dataObj) => {
  axios({
    method: "POST",
    url: API.user.createUser,
    data: JSON.stringify(dataObj),
  })
    .then((response) => {
      console.log(response.data);
      window.location.replace("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signin = (dataObj) => {
  axios({
    method: "POST",
    url: API.user.validateUser,
    data: JSON.stringify(dataObj),
  })
    .then((response) => {
      console.log(response.data);
      const key = {
        session_key: response.data.session_key,
      };
      localStorage.setItem("user", JSON.stringify(key));
      window.location.replace("/");
    })
    .catch(({ response }) => {
      console.log(response.data.message);
    });
};

export const updateUserData = (dataObj) => {
  axios({
    method: "POST",
    url: API.user.updateUser,
    data: JSON.stringify(dataObj),
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch(({ response }) => {
      console.log(response);
    });
};

export const updateUserPasswordData = (dataObj) => {
  axios({
    method: "POST",
    url: API.user.updateUserPassword,
    data: JSON.stringify(dataObj),
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch(({ response }) => {
      console.log(response);
    });
};
