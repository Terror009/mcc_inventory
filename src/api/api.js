const baseUrl = "http://localhost/database/";

export const API = {
  user: {
    findUser: baseUrl + "api/users/find.user.php",
    createUser: baseUrl + "api/users/create.user.php",
    validateUser: baseUrl + "api/users/login.user.php",
  },
  supplier: {
    createSupplier: baseUrl + "api/suppliers/create.supplier.php",
    fetchSupplier: baseUrl + "api/suppliers/fetch.supplier.php",
    deleteSupplier: baseUrl + "api/suppliers/delete.supplier.php",
    updateSupplier: baseUrl + "api/suppliers/update.supplier.php",
  },
  manufacturer: {
    createManufacturer: baseUrl + "api/manufacturer/create.manufacturer.php",
    fetchManufacturer: baseUrl + "api/manufacturer/fetch.manufacturer.php",
    deleteManufacturer: baseUrl + "api/manufacturer/delete.manufacturer.php",
    updateManufacturer: baseUrl + "api/manufacturer/update.manufacturer.php",
  }
};
