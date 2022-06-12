import React, { useState } from "react";

import {
  Modal,
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
} from "@mui/material";

import { createMaterial } from "../../api/materialApi";
import { createMaterialLevelApi } from "../../api/materiallevelApi";
import { createMaterialNotifApi } from "../../api/materialnotifApi";

import { classes } from "../../design/uiDesign";
import { ReactComponent as UploadIcon } from "../../assets/svg/upload.svg";
import { MaterialsUploadFile } from "./CustomUploadFile";
import uniqid from "uniqid";

export default function CustomAddNewMaterial({ open, onClose }) {
  const [file, Setfile] = useState({
    name: "",
    type: "",
    size: "",
  });
  const [payload, Setpayload] = useState({
    material_name: "",
    material_quantity: "",
    material_manufacturer: "",
    material_storage_location: "",
    material_item_condition: "",
    material_type: "",
    material_part_no: "",
    material_part_requirement: "",
  });
  const handleAddBanner = (e) => {
    const loadFiles = e.target.files[0];
    console.log(e.target.name);
    console.log(loadFiles.blob);
    Setpayload({ ...payload, material_part_requirement: loadFiles });
    // will be a any file.
  };

  const AddNewHandleChange = (prop) => (e) => {
    Setpayload({ ...payload, [prop]: e.target.value });
  };

  const isClose = () => {
    onClose();
    Setpayload({
      ...payload,
      material_name: "",
      material_quantity: "",
      material_manufacturer: "",
      material_storage_location: "",
      material_part_name: "",
      material_item_condition: "",
      material_type: "",
      material_part_no: "",
      material_part_requirement: "",
    });
  };
  const AddMaterial = () => {
    const admin_id = JSON.parse(localStorage.getItem("user"));
    const req = [
      {
        name: payload.material_part_requirement.name,
        type: payload.material_part_requirement.type,
        size: payload.material_part_requirement.size,
      },
    ];
    req.forEach((index) => {
      file.name = index.name;
      file.size = index.size;
      file.type = index.type;
    });
    console.log(file.name);
    const obj = {
      material_name: payload.material_name,
      manufacturer: payload.material_manufacturer,
      storage_location: payload.material_storage_location,
      quantity: payload.material_quantity,
      quantity_on_hand: payload.material_quantity,
      part_no: payload.material_part_no,
      item_condition: "Available",
      type: payload.material_type,
      part_req: file.name,
      inventory_code: "IC" + uniqid(),
      product_code: "PC" + uniqid(),
      material_stock_date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
    };

    const obj2 = {
      material_name: payload.material_name,
      manufacturer: payload.material_manufacturer,
      storage_location: payload.material_storage_location,
      quantity: payload.material_quantity,
      part_no: payload.material_part_no,
      item_condition: "Available",
      type: payload.material_type,
      part_req: file.name,
      inventory_code: obj.inventory_code,
      stock_date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
      action: "add material",
    };
    console.log(obj2);
    createMaterial(obj);
    createMaterialNotifApi(obj2);
        window.location.reload();
    isClose();
  };
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginLeft: "40px",
      }}
    >
      <Paper
        sx={{
          width: "1000px",
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
          <Typography
            variant="h5"
            sx={{ color: (theme) => theme.palette.textColor.col3 }}
          >
            Add New Material
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              marginRight: "110px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Name
          </Typography>
          <TextField
            sx={classes.material_edit_input}
            value={payload.material_name}
            onChange={AddNewHandleChange("material_name")}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
            marginTop: "5px",
          }}
        >
          <Typography
            sx={{
              marginRight: "65px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Manufacturer
          </Typography>
          <TextField
            sx={classes.material_edit_input}
            value={payload.material_manufacturer}
            onChange={AddNewHandleChange("material_manufacturer")}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
            marginTop: "5px",
          }}
        >
          <Typography
            sx={{
              marginRight: "40px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Storage Location
          </Typography>
          <TextField
            sx={classes.material_edit_input}
            value={payload.material_storage_location}
            onChange={AddNewHandleChange("material_storage_location")}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
            marginTop: "5px",
          }}
        >
          <Typography
            sx={{
              marginRight: "95px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Quantity
          </Typography>
          <TextField
            type="number"
            sx={classes.material_edit_input}
            value={payload.material_quantity}
            onChange={AddNewHandleChange("material_quantity")}
          />
        </Box>
        {/*     <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
            marginTop: "5px",
          }}
        >
          <Typography
            sx={{
              marginRight: "60px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Item Condition
          </Typography>
          <Select
            sx={{
              height: "35px",
              width: "80%",
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: (theme) => theme.palette.textColor.col3,
              borderRadius: "30px",
              backgroundColor: "transparent",
              transition: "all 0.4s ease",
              "&:hover": {
                borderColor: (theme) => theme.palette.textColor.col1,
              },
            }}
            value={payload.material_item_condition}
            onChange={AddNewHandleChange("material_item_condition")}
          >
            <MenuItem value={"Available"}>AVAILABLE</MenuItem>
            <MenuItem value={"Not Available"}>NOT AVAILABLE</MenuItem>
          </Select>
        </Box> */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
            marginTop: "5px",
          }}
        >
          <Typography
            sx={{
              marginRight: "120px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Type
          </Typography>
          <Select
            sx={{
              height: "35px",
              width: "80%",
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: (theme) => theme.palette.textColor.col3,
              borderRadius: "30px",
              backgroundColor: "transparent",
              transition: "all 0.4s ease",
              "&:hover": {
                borderColor: (theme) => theme.palette.textColor.col1,
              },
            }}
            value={payload.material_type}
            onChange={AddNewHandleChange("material_type")}
          >
            <MenuItem value={"Raw"}>Raw</MenuItem>
            <MenuItem value={"Finished"}>Finished</MenuItem>
          </Select>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
            marginTop: "5px",
          }}
        >
          <Typography
            sx={{
              marginRight: "100px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Part No
          </Typography>
          <TextField
            type="number"
            sx={classes.material_edit_input}
            value={payload.material_part_no}
            onChange={AddNewHandleChange("material_part_no")}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
            marginTop: "5px",
          }}
        >
          <Typography
            sx={{
              marginRight: "30px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Part Requirements
          </Typography>
          <Box
            component="label"
            htmlFor="upload_files"
            sx={{
              width: "12%",
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: (theme) => theme.palette.secondary.main,
              borderRadius: "30px ",
            }}
          >
            <Button
              sx={{
                width: "100%",
              }}
            >
              <MaterialsUploadFile onChange={(e) => handleAddBanner(e)}>
                <UploadIcon style={{ marginRight: "10px" }} />
                <Typography
                  sx={{
                    color: (theme) => theme.palette.textColor.col1,
                    fontSize: "14px",
                  }}
                >
                  Upload
                </Typography>
              </MaterialsUploadFile>
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "30px 0px",
          }}
        >
          <Button
            sx={{
              height: "35px",
              width: "150px",
              border: "1px solid #3A57E8",
              borderRadius: "10px",
              color: (theme) => theme.palette.textColor.col1,
              marginRight: "40px",
            }}
            onClick={AddMaterial}
          >
            <Typography>Save</Typography>
          </Button>
          <Button
            sx={{
              height: "35px",
              width: "150px",
              border: "1px solid #439B38",
              borderRadius: "10px",
              color: (theme) => theme.palette.textColor.col6,
            }}
            onClick={isClose}
          >
            <Typography>Cancel</Typography>
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
}
