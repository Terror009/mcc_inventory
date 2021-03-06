import { Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { API } from "../api/api";
import axios from "axios";
function PrivateRouter({ Component, ...rest }) {
  const [payload, setPayload] = useState({
    data: [{}],
  });
  useEffect(() => {
    let key = JSON.parse(localStorage.getItem("user"));
    let session_key = {};
    if (!key) {
      return;
    } else {
      session_key = {
        session_key: key.session_key,
      };
    }
    const fetchData = async () => {
      await axios({
        method: "POST",
        url: API.admin.findAdmin,
        data: JSON.stringify(session_key),
      })
        .then((response) => {
          console.log(response.data);
          response.data.map((index) => {
            const obj = {
              admin_id: index.admin_id,
              session_key: index.session_key,
            };
            localStorage.setItem("user", JSON.stringify(obj));
          });
        })
        .catch(({ response }) => {
          console.log(response);
        });
    };
    fetchData();
  }, []);
  const isAuth = localStorage.length;
  return { ...rest }, isAuth === 1 ? <Component /> : <Navigate to="/signin" />;
}

export default PrivateRouter;
