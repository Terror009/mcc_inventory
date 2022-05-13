const baseUrl = "http://localhost/database/";

export const API = {
  user: {
    findUser: baseUrl + "api/users/find.user.php",
    createUser: baseUrl + "api/users/create.user.php",
    validateUser: baseUrl + "api/users/login.user.php",
    updateUser: baseUrl + "api/users/update.user.php",
    updateUserPassword: baseUrl + "api/users/update.user.password.php",
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
  },
  material: {
    createMaterial: baseUrl + "api/material/create.material.php",
    fetchMaterial: baseUrl + "api/material/fetch.material.php",
    deleteMaterial: baseUrl + "api/material/delete.material.php",
    updateMaterial: baseUrl + "api/material/update.material.php",
  },
  construction_site: {
    createConstruction:
      baseUrl + "api/construction_site/create.construction_site.php",
    fetchConstruction:
      baseUrl + "api/construction_site/fetch.construction_site.php",
    deleteConstruction:
      baseUrl + "api/construction_site/delete.construction_site.php",
    updateConstruction:
      baseUrl + "api/construction_site/update.construction_site.php",
  },
  project: {
    createProject: baseUrl + "api/project/create.project.php",
    fetchProject: baseUrl + "api/project/fetch.project.php",
    deleteProject: baseUrl + "api/project/delete.project.php",
    updateProject: baseUrl + "api/project/update.project.php",
    pendingProject: baseUrl + "api/project/pending.project.php",
    activeProject: baseUrl + "api/project/active.project.php",
    canceledProject: baseUrl + "api/project/canceled.project.php",
  },
  user_list: {
    createUserList: baseUrl + "api/user_list/create.user.list.php",
    fetchUserList: baseUrl + "api/user_list/fetch.user.list.php",
    deleteUserList: baseUrl + "api/user_list/delete.user.list.php",
    updateUserList: baseUrl + "api/user_list/update.user.list.php",
  },
};
