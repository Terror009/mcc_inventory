import { API } from "./api";
import axios from "axios";

export const createMaterialNotifApi = (dataObj) => {
    console.log(dataObj);
  axios({
    method: "POST",
    url: API.material_notif.createMaterialNotif,
    data: JSON.stringify(dataObj),
  })
    .then((response) => {
      console.log(response);
    })
    .catch(({ response }) => {
      console.log(response);
    });
};
