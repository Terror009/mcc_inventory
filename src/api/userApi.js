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
      window.localStorage.setItem("user", JSON.stringify(response.data));
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
      window.localStorage.setItem("user", JSON.stringify(response.data));
      window.location.replace("/");
    })
    .catch(({ response }) => {
      console.log(response.data.message);
    });
};

export const userStatus = () => {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", API.user.findUser);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      console.log(this.response);
      /*       window.location.replace("/"); */
    } else if (this.readyState === 4 && this.status === 400) {
      console.log(this.response);
    }
  };
};
