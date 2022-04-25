import { API } from "./api";
import axios from "axios";

export const addsupplier = (dataObj) => {
  axios({
    method: "POST",
    url: API.supplier.createSupplier,
    data: JSON.stringify(dataObj),
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchsupplier = () => {
  axios({
    method: "GET",
    url: API.supplier.fecthSupplier,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteSupplier = (dataObj) => {
  axios({
    method: "DELETE",
    url: API.supplier.deleteSupplier,
    data: JSON.stringify(dataObj),
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
