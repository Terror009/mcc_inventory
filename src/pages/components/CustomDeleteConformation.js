import React from "react";

import { Modal, Paper, Box, Typography, Button } from "@mui/material";
import { deleteMaterial } from "../../api/materialApi";
import { deleteSupplier } from "../../api/supplierApi";
import { deletemanufacturer } from "../../api/manufacturerApi";
import { deleteConstruction } from "../../api/constructionApi";
import { deleteProject } from "../../api/projectApi";
import { deleteUserList } from "../../api/userlistApi";
import { createMaterialNotifApi } from "../../api/materialnotifApi";
import { createUserListHistory } from "../../api/userlisthistoryApi";
export default function CustomDeleteConformation({
  open,
  onClose,
  message,
  Alldata,
  data,
  history,
}) {
  const isClose = () => {
    onClose();
  };
  const DeleteData = () => {
    Alldata.forEach((index) => {
      if (index.material_id) {
        const obj = {
          material_id: index.material_id,
        };
        deleteMaterial(obj);
      }
      if (index.supplier_id) {
        const obj = {
          supplier_id: index.supplier_id,
        };
        deleteSupplier(obj);
      }
      if (index.manufacturer_id) {
        const obj = {
          manufacturer_id: index.manufacturer_id,
        };
        deletemanufacturer(obj);
      }
      if (index.construction_id) {
        const obj = {
          construction_id: index.construction_id,
        };
        deleteConstruction(obj);
      }
      if (index.project_id) {
        const obj = {
          project_id: index.project_id,
        };
        deleteProject(obj);
      }
      if (index.construction_id) {
        const obj = {
          construction_id: index.construction_id,
        };
        deleteConstruction(obj);
      }
      if (index.user_list_id) {
        const obj = {
          user_list_id: index.user_list_id,
        };
        deleteUserList(obj);
      }
      console.log(index);
    });
    data.forEach((index) => {
      if (index.material_id) {
        const obj = {
          material_id: index.material_id,
        };
        deleteMaterial(obj);
      }
      if (index.supplier_id) {
        const obj = {
          supplier_id: index.supplier_id,
        };
        deleteSupplier(obj);
      }
      if (index.manufacturer_id) {
        const obj = {
          manufacturer_id: index.manufacturer_id,
        };
        deletemanufacturer(obj);
      }
      if (index.project_id) {
        const obj = {
          project_id: index.project_id,
        };
        deleteProject(obj);
      }
      if (index.user_list_id) {
        const obj = {
          user_list_id: index.user_list_id,
        };
        deleteUserList(obj);
      }
      console.log(index);
    });
    if (history) {
      history.forEach((index) => {
        if (index.material_id) {
          createMaterialNotifApi(index);
        }
        if (index.user_list_id) {
          createUserListHistory(index);
        }
      });
    }
    /*  window.location.reload(); */
  };
  return (
    <Modal
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginLeft: "40px",
      }}
      open={open}
      onClose={onClose}
    >
      <Paper
        sx={{
          width: "700px",
          outline: "none",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px 20px",
            backgroundColor: (theme) => theme.palette.secondary.bg3,
          }}
        >
          <Typography>Warning</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <Box sx={{ padding: "40px 40px" }}>
            <Typography
              sx={{
                fontSize: "20px",
                color: (theme) => theme.palette.textColor.col6,
              }}
            >
              {message}
            </Typography>
          </Box>
        </Box>{" "}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px 20px",
          }}
        >
          <Button
            sx={{
              height: "30px",
              width: "150px",
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: (theme) => theme.palette.secondary.main,
              marginRight: "20px",
            }}
            onClick={DeleteData}
          >
            <Typography
              sx={{
                fontSize: "18px",
                color: (theme) => theme.palette.textColor.col1,
              }}
            >
              Confirm
            </Typography>
          </Button>
          <Button
            sx={{
              height: "30px",
              width: "150px",
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: (theme) => theme.palette.secondary.bg4,
            }}
            onClick={isClose}
          >
            <Typography
              sx={{
                fontSize: "18px",
                color: (theme) => theme.palette.textColor.col6,
              }}
            >
              Cancel
            </Typography>
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
}
