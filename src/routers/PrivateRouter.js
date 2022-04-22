import { Navigate } from "react-router-dom";
import React, { useEffect } from "react";
import { API } from "../api/api";
import axios from "axios";
function PrivateRouter({ Component, ...rest }) {
  axios
    .get(API.user.findUser)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
  const isAuth = localStorage.length;
  console.log(isAuth);
  return { ...rest }, isAuth === 1 ? <Component /> : <Navigate to="/signin" />;
}

export default PrivateRouter;
