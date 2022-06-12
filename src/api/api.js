const baseUrl = "http://localhost/database/";

export const API = {
  admin: {
    findAdmin: baseUrl + "api/admin/find.admin.php",
    createAdmin: baseUrl + "api/admin/create.admin.php",
    validateAdmin: baseUrl + "api/admin/login.admin.php",
    updateAdmin: baseUrl + "api/admin/update.admin.php",
    updateAdminPassword: baseUrl + "api/admin/update.admin.password.php",
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
  materialRequest: {
    fetchMaterial:
      baseUrl + "api/material/material_request/fetch.material.request.php",
    deleteMaterial:
      baseUrl + "api/material/material_request/delete.material.request.php",
  },
  acceptRequest: {
    fetchRequest:
      baseUrl + "api/material/accept_material_request/fetch.request.php",
    createRequest:
      baseUrl + "api/material/accept_material_request/create.request.php",
  },
  material_stock_level: {
    createMaterialLevel:
      baseUrl + "api/material/material_level_stock/create.material.level.php",
    fetchMaterialLevel:
      baseUrl + "api/material/material_level_stock/fetch.material.level.php",
    deleteMaterialLevel:
      baseUrl + "api/material/material_level_stock/delete.material.level.php",
    updateMaterialLevel:
      baseUrl + "api/material/material_level_stock/update.material.level.php",
  },
  material_notif: {
    createMaterialNotif:
      baseUrl + "api/material/material_notif/create.material.notif.php",
    fetchMaterialNotif:
      baseUrl + "api/material/material_notif/fetch.material.notif.php",
  },
  construction_site: {
    createConstruction:
      baseUrl + "api/construction_site/create.construction_site.php",
    fetchConstruction:
      baseUrl + "api/construction_site/fetch.construction_site.php",
    deleteConstruction:
      baseUrl + "api/construction_site/delete.construction_site.php",
  },
  project: {
    completeProject: baseUrl + "api/project/complete.project.php",
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
  user_list_history: {
    createUserListHistory:
      baseUrl + "api/user_list/user_list_history/create.user.history.php",
    fetchUserListHistory:
      baseUrl + "api/user_list/user_list_history/fetch.user.history.php",
  },
  userApproved: {
    createUserApproved: baseUrl + "api/approved_user/create.approved.user.php",
    fetchUserApproved: baseUrl + "api/approved_user/fetch.approved.user.php",
    emailedUser: baseUrl + "api/approved_user/emailed.user.php",
  },
  profilePic: {
    createProfilePic: baseUrl + "api/profile_pic/create.profile.pic.php",
  },
};
