import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Paper,
  IconButton,
  TextField,
  Button,
  Select,
  MenuItem,
} from "@mui/material";

import { ReactComponent as ArrowDownIcon } from "../../assets/svg/black_arrow_down.svg";
import { ReactComponent as UploadIcon } from "../../assets/svg/upload.svg";
import { classes } from "../../design/uiDesign";

import { ReactComponent as EditIcon } from "../../assets/svg/edit.svg";
import { MaterialsUploadFile } from "./CustomUploadFile";

import { updateMaterial, deleteMaterial } from "../../api/materialApi";
import { createMaterialNotifApi } from "../../api/materialnotifApi";

export default function CustomMaterialModal({ open, onClose, material_info }) {
  const [payload, Setpayload] = useState({
    isOpen: false,
  });

  const ModalHandleOpen = () => {
    Setpayload({ ...payload, isOpen: true });
  };
  const ModalHandleClose = () => {
    Setpayload({ ...payload, isOpen: false });
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
          <Typography>{material_info.material_name} Information</Typography>
          <Box Component="span" sx={{ flexGrow: "1" }} />
          <IconButton onClick={ModalHandleOpen}>
            <EditIcon />
          </IconButton>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "15px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "160px",
            }}
          >
            Name
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            {material_info.material_name}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "15px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "100px",
            }}
          >
            Storage Location
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            {material_info.storage_location}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "15px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "147px",
            }}
          >
            Quantity
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            {material_info.quantity}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "15px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "110px",
            }}
          >
            Inventory Code
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            {material_info.inventory_code}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "15px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "118px",
            }}
          >
            Product Code
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            {material_info.product_code}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "15px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "122px",
            }}
          >
            Manufacturer
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            {material_info.manufacturer}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "15px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "125px",
            }}
          >
            Part Number
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            {material_info.part_no}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "15px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,

              marginRight: "112px",
            }}
          >
            Item Condition
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            {material_info.item_condition}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "15px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,

              marginRight: "82px",
            }}
          >
            Parts Requirements
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            {material_info.part_req}
          </Typography>
        </Box>
        <CustomMaterialEditModal
          open={payload.isOpen}
          onClose={ModalHandleClose}
          material_info={material_info}
        />
      </Paper>
    </Modal>
  );
}

function CustomMaterialEditModal({ open, onClose, material_info }) {
  const [file, Setfile] = useState({
    name: "",
    type: "",
    size: "",
  });
  const [material_edit, Setmaterial_edit] = useState({
    name: material_info.material_name,
    quantity: material_info.quantity,
    location: material_info.storage_location,
    inventory_code: material_info.inventory_code,
    product_code: material_info.product_code,
    part_no: material_info.part_no,
    item_condition: material_info.item_condition,
    manufacturer: material_info.manufacturer,
    part_req: material_info.part_req,
  });

  const [quantity, SetQuantity] = useState({
    num: "",
  });
  const [operator, SetOperator] = useState({
    isSum: "+",
  });
  const MaterialHandleChange = (prop) => (e) => {
    Setmaterial_edit({ ...material_edit, [prop]: e.target.value });
  };
  const PartialHandleChange = (prop) => (e) => {
    SetQuantity({ ...quantity, [prop]: e.target.value });
  };
  const OperatorHandleChange = (prop) => (e) => {
    SetOperator({ ...operator, [prop]: e.target.value });
  };
  const handleAddBanner = (e) => {
    const loadFiles = e.target.files[0];
    console.log(e.target.name);
    Setmaterial_edit({ ...material_edit, part_req: loadFiles });

    // will be a any file.
  };

  const UpdateMaterial = () => {
    if (material_edit.item_condition === "Not Available") {
      const obj = {
        material_id: material_info.material_id,
      };
      deleteMaterial(obj);
    } else {
      let sum = "";
      if (operator.isSum === "+") {
        sum = parseInt(material_edit.quantity) + parseInt(quantity.num);
      } else {
        if (parseInt(material_edit.quantity) < parseInt(quantity.num)) {
          alert("The Fixed quantity is less than partial quantity");
        } else {
          sum = parseInt(material_edit.quantity) - parseInt(quantity.num);
        }
      }
      const req = [
        {
          name: material_edit.part_req.name,
          type: material_edit.part_req.type,
          size: material_edit.part_req.size,
        },
      ];
      req.forEach((index) => {
        file.name = index.name;
        file.size = index.size;
        file.type = index.type;
      });
      const obj = {
        material_name: material_edit.name,
        quantity: sum,
        storage_location: material_edit.location,
        part_no: material_edit.part_no,
        item_condition: material_edit.item_condition,
        manufacturer: material_edit.manufacturer,
        part_req:
          material_edit.part_req !== material_info.part_req
            ? file.name
            : material_info.part_req,
        material_stock_date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        material_id: material_info.material_id,
      };

      const obj1 = {
        material_name: material_edit.name,
        quantity: sum !== "" ? sum : material_edit.quantity,
        storage_location: material_edit.location,
        inventory_code: material_edit.inventory_code,
        product_code: material_edit.product_code,
        part_no: material_edit.part_no,
        item_condition: material_edit.item_condition,
        manufacturer: material_edit.manufacturer,
        part_req:
          material_edit.part_req !== material_info.part_req
            ? file.name
            : material_info.part_req,
        type: material_info.type,
        stock_date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        action: "update material",
        material_id: material_info.material_id,
      };
      createMaterialNotifApi(obj1);
      updateMaterial(obj);
      isClose();
      window.location.reload();
    }
  };
  const isClose = () => {
    onClose();
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
            padding: "15px 20px",
            backgroundColor: (theme) => theme.palette.secondary.bg3,
          }}
        >
          <Typography>{material_info.name} Information</Typography>
          <Box component="span" sx={{ flexGrow: "1" }} />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "10px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "150px",
            }}
          >
            Name
          </Typography>
          <TextField
            value={material_edit.name}
            onChange={MaterialHandleChange("material_name")}
            size="small"
            sx={classes.material_edit_input}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "10px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "90px",
            }}
          >
            Storage Location
          </Typography>
          <TextField
            value={material_edit.location}
            onChange={MaterialHandleChange("storage_location")}
            size="small"
            sx={classes.material_edit_input}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "10px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "138px",
            }}
          >
            Quantity
          </Typography>
          <TextField
            value={material_edit.quantity}
            onChange={MaterialHandleChange("quantity")}
            size="small"
            sx={[classes.material_edit_input, { width: "30%" }]}
          />
          <Select
            value={operator.isSum}
            onChange={OperatorHandleChange("isSum")}
            sx={{
              height: "40px",
              width: "100px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
                "&:hover fieldset": {
                  borderColor: "transparent",
                },
                "&.Mui-focused notchedOutlined": {
                  borderColor: "transparent",
                },
              },
            }}
          >
            <MenuItem value="+">+</MenuItem>
            <MenuItem value="-">-</MenuItem>
          </Select>
          <TextField
            value={quantity.num}
            onChange={PartialHandleChange("num")}
            size="small"
            sx={[classes.material_edit_input, { width: "30%" }]}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "10px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "110px",
            }}
          >
            Manufacturer
          </Typography>
          <TextField
            value={material_edit.manufacturer}
            onChange={MaterialHandleChange("manufacturer")}
            size="small"
            sx={classes.material_edit_input}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "10px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "112px",
            }}
          >
            Part Number
          </Typography>
          <TextField
            value={material_edit.part_no}
            onChange={MaterialHandleChange("part_no")}
            size="small"
            sx={classes.material_edit_input}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "10px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "102px",
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
            value={material_edit.item_condition}
            onChange={MaterialHandleChange("item_condition")}
          >
            <MenuItem value={"Available"}>AVAILABLE</MenuItem>
            <MenuItem value={"Not Available"}>NOT AVAILABLE</MenuItem>
          </Select>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "10px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "75px",
            }}
          >
            Parts Requirements
          </Typography>
          <Box
            component="label"
            htmlFor="upload_files"
            sx={{
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: (theme) => theme.palette.secondary.main,
              borderRadius: "30px ",
              padding: "0px 20px",
            }}
          >
            <Button
              sx={{
                width: "100%",
              }}
            >
              <MaterialsUploadFile
                onChange={(e) => handleAddBanner(e)}
                value={material_edit.part_req}
              >
                <UploadIcon style={{ marginRight: "10px" }} />
                <Typography
                  sx={{
                    color: (theme) => theme.palette.textColor.col1,
                    fontSize: "14px",
                  }}
                >
                  {material_info.part_req}
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
            padding: "10px 0px",
          }}
        >
          <Button
            sx={{
              height: "30px",
              width: "150px",
              border: "1px solid #3A57E8",
              borderRadius: "10px",
              color: (theme) => theme.palette.textColor.col1,
              marginRight: "40px",
            }}
            onClick={UpdateMaterial}
          >
            <Typography>Save</Typography>
          </Button>
          <Button
            sx={{
              height: "30px",
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
