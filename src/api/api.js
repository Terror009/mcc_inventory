const baseUrl = "http://localhost/database/";

export const API = {
  user: {
    findUser: baseUrl + "api/users/find.user.php",
    createUser: baseUrl + "api/users/create.user.php",
    validateUser: baseUrl + "api/users/login.user.php",
  },
  supplier: {
    createSupplier: baseUrl + "api/suppliers/create.supplier.php",
    fecthSupplier: baseUrl + "api/suppliers/fetch.supplier.php",
    deleteSupplier: baseUrl + "api/suppliers/delete.supplier.php",
  },
};
