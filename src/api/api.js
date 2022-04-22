
const baseUrl ="http://localhost/database/";

export const API = {
  user: {
    findUser: baseUrl + "api/users/find.user.php",
    createUser: baseUrl + "api/users/create.user.php",
    validateUser: baseUrl + "api/users/login.user.php",
  }
}