import { Navigate } from "react-router-dom";
import React, { useEffect } from "react";

export default function PublicRouter({ Component, ...rest }) {
  const isAuth = localStorage.length;
  console.log(isAuth);

  return (
    { ...rest }, isAuth === 0 ? <Component /> : <Navigate to="/" />
  );
}
