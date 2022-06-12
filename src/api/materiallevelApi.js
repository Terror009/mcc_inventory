import { API } from "./api";
import axios from "axios";

export const createMaterialLevelApi = (dataObj) => {
  console.log(dataObj);
  axios({
    method: "POST",
    url: API.material_stock_level.createMaterialLevel,
    data: JSON.stringify(dataObj),
  })
    .then((response) => {
      console.log(response);
    })
    .catch(({ response }) => {
      console.log(response);
    });
};

export const deleteMaterialLevelApi = (dataObj) => {
  console.log(dataObj);
  axios({
    method: "POST",
    url: API.material_stock_level.deleteMaterialLevel,
    data: JSON.stringify(dataObj),
  })
    .then((response) => {
      console.log(response);
    })
    .catch(({ response }) => {
      console.log(response);
    });
};

export const updateMaterialLevelApi = (dataObj) => {
  console.log(dataObj);
  axios({
    method: "POST",
    url: API.material_stock_level.updateMaterialLevel,
    data: JSON.stringify(dataObj),
  })
    .then((response) => {
      console.log(response);
    })
    .catch(({ response }) => {
      console.log(response);
    });
};
