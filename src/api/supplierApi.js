import { API } from "./api";
import axios from "axios";

export const addsupplier = (dataObj) => {
  console.log(dataObj);
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
    url: API.supplier.fetchSupplier,
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
    method: "POST",
    url: API.supplier.deleteSupplier,
    data: JSON.stringify(dataObj),
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch(({ response }) => {
      console.log(response.data.message);
      console.log(response);
    });
};

export const updateSupplier = (dataObj) => {
  axios({
    method: "POST",
    url: API.supplier.updateSupplier,
    data: JSON.stringify(dataObj),
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch(({ response }) => {
      console.log(response);
    });
};
