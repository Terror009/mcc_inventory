import { API } from "./api";
import axios from "axios";
export const signup = (dataObj) => {
  axios({
    method: "POST",
    url: API.user.createUser,
    data: JSON.stringify(dataObj),
  })
    .then((response) => {
      console.log(response);
      window.location.replace("/");
    })
    .catch((err) => {
      console.log(err);
    });
  /* var xhttp = new XMLHttpRequest();
  xhttp.open("POST", API.user.createUser);
  console.log(JSON.stringify(dataObj));
  console.log(xhttp.send(JSON.stringify(dataObj)));
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 201) {
      console.log(this.response);
      window.location.replace("/");
    } else if (this.readyState === 4 && this.status === 400) {
      console.log(this.response);
    }
  }; */
};

export const signin = (dataObj) => {
  axios({
    method: "POST",
    url: API.user.validateUser,
    data: JSON.stringify(dataObj),
  })
    .then((response) => {
      console.log(response)
      window.location.replace("/");
    })
    .catch((err) => {
      console.log(err)
    });
    
/*   var xhttp = new XMLHttpRequest();
  xhttp.open("POST", API.user.validateUser);
  xhttp.send(JSON.stringify(dataObj));
  console.log(JSON.stringify(dataObj));
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      console.log(this.response);
             window.location.replace("/"); 
    } else if (this.readyState === 4 && this.status === 400) {
      console.log(this.response);
    }
  }; */
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

/* export const userApi = (db_url, user_data) => {
    axios.post(db_url,user_data)
    .then(res=> console.log(res.data))
    .catch(error => {
      console.log(error.response);
    });
}  */
